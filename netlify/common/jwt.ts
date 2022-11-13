import jwt from 'jsonwebtoken'

const JWT_SECRET = '2sJ63Qo39XeE0HHtTe0MfLmM2ojZGwhQ'

export const HASURA_CLAIMS = 'https://hasura.io/jwt/claims'
export const HASURA_ID = 'x-hasura-user-id'

export const signToken = (id: string) => {
	return jwt.sign(
		{
			[HASURA_CLAIMS]: {
				'x-hasura-allowed-roles': ['admin'],
				'x-hasura-default-role': 'admin',
				'x-hasura-user-id': id,
			},
		},
		JWT_SECRET
	)
}

export const getTokenData = (token: string) => {
	return jwt.verify(token, JWT_SECRET)
}
