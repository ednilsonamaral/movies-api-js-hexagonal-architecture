import Mongoose from 'mongoose';
import Paginate from 'mongoose-paginate-v2';

export default ({ config, providerConnection, movieSchema }) => {
	const connection = providerConnection.connection;

	movieSchema.set('_id', true);

	movieSchema.add({
		_id: {
			type: Mongoose.Schema.ObjectId,
			auto: true,
		},
	});

	movieSchema.plugin(Paginate);
	movieSchema.index({ movie_id: 1 }, { unique: true });

	return connection.model(
		config.db.collections.movies.name,
		movieSchema
	);
};
