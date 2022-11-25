import AwilixExpress from 'awilix-express';
import http from 'http';
import Express from 'express';
import Helmet from 'helmet';

// export default ({ config, router, logger, container }) => ({
export default ({ config, router, container }) => ({
	start: () => {
		const app = Express()
			.use(Helmet())
			.use(AwilixExpress.scopePerRequest(container))
			.use(router);

		const server = http.createServer(app);

		return new Promise((resolve) => {
			const s = server.listen(config.web.port, () => {
				const { port } = s.address();
				// logger.info(`[p ${process.pid}] Listening at port ${port}`);
				console.log(`[p ${process.pid}] Listening at port ${port}`);
				resolve();
			});
		});
	},
});
