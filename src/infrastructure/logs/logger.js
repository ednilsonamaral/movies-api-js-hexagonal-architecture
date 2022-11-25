const buildMessage = (requestId, message) => {
	if (message instanceof Error)
		return `[requestId=${requestId}] ${message.message} - ${message.stack} - ${message.error_code}`;

	if (message instanceof Object) message = JSON.stringify(message);

	if (requestId) message = `[requestId=${requestId}] ${message}`;

	return message;
};

export default ({ scopedRequest, loggerAdapter }) => ({
	info(message) {
		loggerAdapter.logger.info(buildMessage(scopedRequest.requestId, message));
	},

	error(message) {
		loggerAdapter.logger.error(buildMessage(scopedRequest.requestId, message));
	},

	warn(message) {
		loggerAdapter.logger.warn(buildMessage(scopedRequest.requestId, message));
	},
});
