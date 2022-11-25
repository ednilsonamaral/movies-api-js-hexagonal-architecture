export default {
	web: {
		port: 3002,
	},
	environment: 'docker',
	db: {
		username: 'movies',
		password: 'movies2022',
		database: 'movies-db',
		servers: ['db:27017'],
		dialect: 'mongodb',
		logging: '',
		options: {
			authSource: 'admin',
			authMechanism: 'DEFAULT',
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
