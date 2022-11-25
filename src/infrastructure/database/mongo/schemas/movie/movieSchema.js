import Schema from '../schema.js';

export default new Schema({
	movie_id: {
		type: String,
		unique: true,
	},

	title: {
		type: String,
		required: true,
	},

	original_title: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},

	release_date: {
		type: String,
		required: true,
	},

	rt_score: {
		type: String,
		required: true,
	},
});






