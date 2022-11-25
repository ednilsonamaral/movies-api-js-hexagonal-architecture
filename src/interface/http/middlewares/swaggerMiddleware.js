import SwaggerUi from 'swagger-ui-express';

import Info from '../../../../config/info.js';

export default ({ movieRoutes, swaggerDocGenerator }) => {
	const routes = [].concat(movieRoutes);

	const options = {
		title: Info.serviceLabel,
		version: Info.version,
		description: 'Movies API Swagger Documentation',
	};

	const swaggerDoc = swaggerDocGenerator.generateSwagger(routes, options);

	return [SwaggerUi.serve, SwaggerUi.setup(swaggerDoc)];
};
