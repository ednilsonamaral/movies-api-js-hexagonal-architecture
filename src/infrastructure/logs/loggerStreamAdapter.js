export default () => ({
	req: (req) => ({
		method: req.method,
		url: req.url,
		params: req.params,
		requestBody: req.raw.body,
		movieId: req.headers.movieId,
	}),
	res: (res) => ({
		statusCode: res.statusCode,
		body: res.raw.body,
	}),
});
