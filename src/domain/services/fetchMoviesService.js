export default ({ movieRepository }) => ({
	fetchAndCreate: async ({ body }) =>
		await movieRepository.create(body),
});
