import Exception from './exception.js';

const defaultErrorCode = '400';

export default class ContractException extends Exception {
	constructor(error, ...params) {
		super(error, defaultErrorCode, ...params);
		this.error_type = 'badRequest';

		if (error.details) this.details = error.details;
	}
}
