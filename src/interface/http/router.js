import { Router } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

export default ({
	httpErrorMiddleware,
	notFoundMiddleware,
	routerRegister,
	swaggerMiddleware,
	// loggerMiddleware,
	movieRoutes,
	movieTrackerMiddleware,
	healthCheckMiddleware,
}) => {
	const router = Router();

	return (
		router
			.use(cors())
			.use(bodyParser.json())
			.use(healthCheckMiddleware.healthcheck())
			.use(movieTrackerMiddleware)
			// .use(loggerMiddleware)
			.use('/api/v1', routerRegister.register(movieRoutes))
			.use('/api/docs', swaggerMiddleware)
			.use(notFoundMiddleware)
			.use(httpErrorMiddleware)
	);
};
