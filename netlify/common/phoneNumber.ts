import { phoneRegex } from './regex'

export const validatePhoneNumber = (phoneNumber: string) => {
	let transformedPhoneNumber = phoneNumber
	const isPhoneValid = phoneRegex.test(phoneNumber)
	if (!isPhoneValid) {
		throw new Error(
			JSON.stringify({
				statusCode: 400,
				body: JSON.stringify({
					message: 'Phone number is not valid',
				}),
			})
		)
	}
	if (!phoneNumber.startsWith('+')) {
		if (phoneNumber.startsWith('38')) {
			transformedPhoneNumber = `+${phoneNumber}`
		} else {
			transformedPhoneNumber = `+38${phoneNumber}`
		}
	}
	return transformedPhoneNumber
}
