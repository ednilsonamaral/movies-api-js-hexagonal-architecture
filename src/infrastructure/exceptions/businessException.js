import Exception from './exception.js';

const defaultErrorCode = '422';

export default class BusinessException extends Exception {
	constructor(error, ...params) {
		super(error, defaultErrorCode, ...params);
		this.error_type = 'business';
	}
}
