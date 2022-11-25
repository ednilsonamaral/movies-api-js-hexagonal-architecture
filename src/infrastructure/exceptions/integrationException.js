import Exception from './exception.js';

const defaultErrorCode = '503';

export default class IntegrationException extends Exception {
	constructor(error, ...params) {
		super(error, defaultErrorCode, ...params);
		this.error_type = 'integration';
	}
}
