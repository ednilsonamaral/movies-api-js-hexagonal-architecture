export default ({ container }) => {
	const ctx = container.cradle;

	return [
		{
			method: 'get',
			path: '/movies',
			validation: {
				query: ctx.movieContract.query,
			},
			handler: ctx.movieController.listMovies,
		},

    {
			method: 'get',
			path: '/movies/fetch',
			validation: {
				query: ctx.movieContract.query,
			},
			handler: ctx.movieController.listMovies,
		},
	];
};
