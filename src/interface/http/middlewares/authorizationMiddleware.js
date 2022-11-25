export default ({ config }) =>
	async (req, res, next) => {
		// if (!config.environment === 'production') next();

		const apiKey = req.headers['api-key'] || '';
		console.log('config.environment: ', config.environment);
		console.log('apiKey: ', apiKey);

		res.status(401).send('Unauthorized');
	};
