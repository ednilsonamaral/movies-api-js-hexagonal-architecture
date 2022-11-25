import AsyncMiddleware from '../../middlewares/asyncMiddleware.js';

export default (opts) => ({
	createMovie: AsyncMiddleware(async (ctx) => {
		const created = await opts.createMovie.execute({
			body: ctx.body,
		});

		return ctx.res.status(opts.httpConstants.code.CREATED).json(created);
	}),

	listMovies: AsyncMiddleware(async (ctx) => {
		const list = await opts.listMovies.execute({
			query: ctx.query,
		});

		return ctx.res.status(opts.httpConstants.code.OK).json(list);
	}),
  
});
