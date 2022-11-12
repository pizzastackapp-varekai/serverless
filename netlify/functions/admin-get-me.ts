import { Handler } from '@netlify/functions'
import { api } from '../common/api'
import { getTokenData, HASURA_CLAIMS, HASURA_ID } from '../common/jwt'

const handler: Handler = async (event, context) => {
	const { body, headers } = event
	const authHeader = headers['authorization']
	if (!authHeader) {
		return {
			statusCode: 403,
			message: 'Forbidden',
		}
	}
	const [_, authToken] = authHeader.split(' ')
	const adminObj = getTokenData(authToken)
	const adminId = adminObj[HASURA_CLAIMS][HASURA_ID]

	const data = await api.AdminGetMe(
		{ id: adminId },
		{
			'x-hasura-admin-secret': 'myadminsecretkey',
		}
	)

	return {
		statusCode: 200,
		body: JSON.stringify({
			username: data.admin_by_pk?.username,
			id: data.admin_by_pk?.id,
		}),
	}
}

export { handler }
