export const config = {
	//HASURA
	hasuraEndpoint: process.env.HASURA_ENDPOINT,
	hasuraAdminSecret: process.env.HASURA_ADMIN_SECRET,
	hasuraPizzaStackSecret: process.env.HASURA_PIZZASTACK_SECRET,
	//CLOUDINARY
	cloudinaryCloudName: process.env.CLOUD_NAME,
	cloudinaryApiKey: process.env.API_KEY,
	cloudinarySecret: process.env.API_SECRET,
	//TWILIO
	twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
	twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
	twilioServiceSid: process.env.TWILIO_SERVICE_SID,
	//ONESIGNAL
	onesignalApiKey: process.env.ONESIGNAL_API_KEY,
	onesignalAppId: process.env.ONE_SIGNAL_APP_ID,
	//MISC
	jwtSecret: process.env.JWT_SECRET,
	passwordSalt: process.env.PASSWORD_SALT,
	adminFrontendUrl: process.env.ADMIN_FRONTEND_URL,
}
