import clear from '../../tools/clearObject.js';

export default class Repository {
	constructor({ httpError, newUUID, ResourceMapper, ResourceModel }) {
		this.httpError = httpError;
		this.ResourceMapper = ResourceMapper;
		this.ResourceModel = ResourceModel;
		this.newUUID = newUUID;
	}

	async count(query = {}) {
		return await this.ResourceModel.countDocuments(query);
	}

	async create(domainEntity) {
		const resourceModel = this.ResourceModel(
			this.ResourceMapper.toDatabase(domainEntity)
		);
		const databaseCreatedResource = await resourceModel.save();
		return this.ResourceMapper.toEntity(databaseCreatedResource);
	}

	async findPaginated({
		offset = 1,
		limit = 100,
		query = {},
		clearQuery = true,
	}) {
		if (clearQuery) clear(query);

		const option = { page: Number(offset), limit: Number(limit) };
		const result = await this.ResourceModel.paginate(query, option);
		result.docs = result.docs.map(this.ResourceMapper.toEntity);

		return this.ResourceMapper.paginate(result);
	}

	async get(query) {
		const databaseResource = await this.ResourceModel.findOne(query);
		return this.ResourceMapper.toEntity(databaseResource);
	}

	async replace(query, domainEntity) {
		const databaseReplacedResource = await this.ResourceModel.findOneAndReplace(
			query,
			this.ResourceMapper.toDatabase(domainEntity),
			{
				new: true,
				returnOriginal: false,
				runValidators: true,
			}
		);
		return this.ResourceMapper.toEntity(databaseReplacedResource);
	}

	async remove(query) {
		const databaseDeletedResource = await this.ResourceModel.findOneAndRemove(
			query
		);
		return this.ResourceMapper.toEntity(databaseDeletedResource);
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

	async updateMany(query, data) {
		const {
			n: entitiesMatched,
			nModified: entitiesModified,
			ok,
		} = await this.ResourceModel.updateMany(query, data, {
			new: true,
			upsert: false,
			runValidators: true,
		});

		if (!ok)
			throw this.httpError.internalServer([
				`Error when updating many with query:${JSON.stringify(
					query
				)} and data:${JSON.stringify(data)}`,
			]);

		return {
			entitiesMatched,
			entitiesModified,
		};
	}
}
