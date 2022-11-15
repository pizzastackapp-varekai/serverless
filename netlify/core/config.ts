export const config = {
	//HASURA
	hasuraEndpoint: process.env.HASURA_ENDPOINT,
	hasuraAdminSecret: process.env.HASURA_ADMIN_SECRET,
	hasuraPizzaStackSecret: process.env.HASURA_PIZZA_STACK_SECRET,
	//CLOUDINARY
	cloudinaryCloudName: process.env.CLOUD_NAME,
	cloudinaryApiKey: process.env.API_KEY,
	cloudinarySecret: process.env.API_SECRET,
	//MISC
	jwtSecret: process.env.JWT_SECRET,
	passwordSalt: process.env.PASSWORD_SALT,
}
