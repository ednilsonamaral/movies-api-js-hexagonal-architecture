export default ({ scopedRequest }) =>
	(req, res, next) => {
		const requestId = req.headers['request-id'];
		req.headers['request-id'] = requestId;
		scopedRequest.setScopedValue('requestId', requestId);
		next();
	};
