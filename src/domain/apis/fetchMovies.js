export default ({ fetchMoviesService }) => ({
	execute: async ({ body }) =>
		await fetchMoviesService.fetchAndCreate({ body }),
});
