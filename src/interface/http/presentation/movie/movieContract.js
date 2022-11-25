import Joi from 'joi';

export default () => ({
	movie: Joi.object().keys({
		user_id: Joi.number().required(),
    title: Joi.string().required(),
    original_title: Joi.string().required(),
    description: Joi.string().required(),
    release_date: Joi.string().required(),
    rt_score: Joi.string().required(),
	}),

	query: Joi.object().keys({
		limit: Joi.string(),
		offset: Joi.string(),
	}),

});