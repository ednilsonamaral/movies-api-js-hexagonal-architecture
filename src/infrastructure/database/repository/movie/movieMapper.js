export default ({ clear }) => ({
	toEntity: (movieObject = {}) => {
		if (!movieObject) return null;

		const {
			movie_id,
			title,
			original_title,
			description,
			release_date,
			rt_score,
		} = movieObject;

		const movie = {
			movie_id,
			title,
			original_title,
			description,
			release_date,
			rt_score,
		};

		return clear(movie);
	},

	toDatabase: (movieObject) => {
		const {
			movie_id,
			title,
			original_title,
			description,
			release_date,
			rt_score,
		} = movieObject;

		const movie = {
			movie_id,
			title,
			original_title,
			description,
			release_date,
			rt_score,
		};

		return clear(movie);
	},

	paginate: (moviesList) => {
		const { docs, totalDocs, limit, totalPages, page } = moviesList;

		return clear({
			total: totalDocs,
			limit,
			offset: page,
			offsets: totalPages,
			movies: docs,
		});
	},
});
