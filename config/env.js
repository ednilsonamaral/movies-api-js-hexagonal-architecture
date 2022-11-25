export default {
	web: {
		port: 3002,
	},
	environment: process.env.NODE_ENV,
	db: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		servers: [process.env.DB_SERVERS],
		dialect: process.env.DB_DIALECT,
		logging: process.env.DB_LOGGING,
		options: {
			authSource: '$external',
			authMechanism: 'MONGODB-AWS',
			replicaSet: '',
			useUnifiedTopology: true,
			readPreference: 'nearest',
			useNewUrlParser: true,
		},
		collections: {
			movies: {
				name: 'movies',
				version: '1.0',
			},
		},
	},
	integration: {
		rest: {
			studioGhibliApi: {
				baseUrl: process.env.STUDIO_GHIBLI_API_URL,
				logLevel: ['ROUTE', 'REQ', 'RES'],
				rejectUnauthorized: false,
				timeout: 10000,
			},
		}
	},
	stackError: {
		isVisible: false,
	},
};
