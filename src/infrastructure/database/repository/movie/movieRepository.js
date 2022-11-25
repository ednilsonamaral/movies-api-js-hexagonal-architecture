import Repository from '../repository.js';

export default class movieRepository extends Repository {
	constructor({ moviesModel, movieMapper, logger }) {
		super({
			ResourceModel: moviesModel,
			ResourceMapper: movieMapper,
			logger,
		});
	}

	async create(movie) {
		movie.created_at = new Date();

		const mongoEntity = Object.assign(movie);

		const mongoResourceModel = this.ResourceModel(
			this.ResourceMapper.toDatabase(mongoEntity)
		);

		const databaseCreatedResource = await mongoResourceModel.save();

		return this.ResourceMapper.toEntity(databaseCreatedResource);
	}

	async update(query, domainEntity) {
		const databaseUpdatedResource = await this.ResourceModel.findOneAndUpdate(
			query,
			this.ResourceMapper.toDatabase(domainEntity),
			{
				new: true,
				upsert: false,
				runValidators: true,
			}
		);

		return this.ResourceMapper.toEntity(databaseUpdatedResource);
	}

	async remove(query) {
		const { movie_id } = query;
		const removed = await this.ResourceModel.remove({ _id: movie_id });
		return removed;
	}
}
