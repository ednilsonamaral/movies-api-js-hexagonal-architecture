import Enum from '../../infrastructure/tools/enum.js';

const applicationError = Enum({
	BAD_REQUEST: 'badRequest',
	UNAUTHORIZED: 'unauthorized',
	FORBIDDEN: 'forbidden',
	BUSINESS: 'business',
	NOT_FOUND: 'notFound',
	INTEGRATION: 'integration',
	OPERATION: 'operation',
});

// map error_code to http_error
const applicationErrorCode = Enum({
	400: 'badRequest',
	401: 'unauthorized',
	403: 'forbidden',
	404: 'notFound',
	422: 'business',
	504: 'integration',
	500: 'operation',
});

export { applicationError, applicationErrorCode };
