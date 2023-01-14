import { faker } from '@faker-js/faker'
import { Handler } from '@netlify/functions'
import { DateTime } from 'luxon'
import { api } from '../common/api'
import {
	CreateFakeOrderMutationVariables,
	Payment_Types_Enum,
} from '../common/sdk'
import { verifyHasura } from '../common/verifyHasura'
import { config } from '../core/config'

const handler: Handler = async (event, context) => {
	const { headers, queryStringParameters } = event
	const {
		amount: AmountRaw = '1',
		recent: recentRow = '0',
		forceCreate: forceCreateRaw = 'false',
		phone: phoneRaw = null,
	} = queryStringParameters

	const amount = Number(AmountRaw)
	const recent = Number(recentRow)
	const forceCreate = forceCreateRaw === 'true'
	const phone = phoneRaw ? decodeURIComponent(phoneRaw) : null
	try {
		verifyHasura(headers)
	} catch (error) {
		return JSON.parse(error.message)
	}

	const currentHour = DateTime.now().setZone('Europe/Kiev').hour

	const isWorkingHours = currentHour >= 10 && currentHour <= 22

	if (!isWorkingHours && !forceCreate) {
		return {
			statusCode: 202,
			body: JSON.stringify({ status: 'not working hours' }),
		}
	}

	const categories = await api.GetCategories()
	const menuItems = await api.GetMenuItemsGroupedByCategoryId({
		firstCategory: categories.categories[0].id,
		secondCategory: categories.categories[1].id,
	})

	const firstGroupLength = menuItems.firstGroup.length
	const secondGroupLength = menuItems.secondGroup.length

	for (let i = 0; i < amount; i++) {
		const fakeData: CreateFakeOrderMutationVariables = {
			client_address: faker.address.streetAddress(true),
			client_name: faker.name.fullName(),
			client_phone: phone ?? faker.phone.number('+380#########'),
			created_at: new Date(),
			comment: faker.datatype.boolean() ? faker.lorem.lines(2) : null,
			payment_type: faker.datatype.boolean()
				? Payment_Types_Enum.Card
				: Payment_Types_Enum.Cash,
		}

		if (recent !== 0) {
			fakeData.created_at = faker.date.recent(recent)
		}

		const newOrder = await api.CreateFakeOrder(fakeData, {
			'x-hasura-admin-secret': config.hasuraAdminSecret,
		})

		const firstGroupItem =
			menuItems.firstGroup[faker.datatype.number({ max: firstGroupLength - 1 })]
				.id
		const secondGroupItem =
			menuItems.secondGroup[
				faker.datatype.number({ max: secondGroupLength - 1 })
			].id

		await api.AddItemsToFakeOrder(
			{
				objects: [
					{ order_id: newOrder.insert_orders_one.id, menu_id: firstGroupItem },
					{ order_id: newOrder.insert_orders_one.id, menu_id: secondGroupItem },
				],
			},
			{
				'x-hasura-admin-secret': config.hasuraAdminSecret,
			}
		)
	}

	return {
		statusCode: 202,
		body: JSON.stringify({ status: 'OK' }),
	}
}

export { handler }
