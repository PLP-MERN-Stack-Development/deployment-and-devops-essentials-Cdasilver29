const Joi = require('joi');

const validatePost = (data) => {
  const schema = Joi.object({
    title: Joi.string().max(200).required(),
    content: Joi.string().required(),
    author: Joi.string().required(),
    category: Joi.string().required(),
    featuredImage: Joi.string().uri().allow(null, ''),
    status: Joi.string().valid('draft', 'published'),
    tags: Joi.array().items(Joi.string())
  });
  return schema.validate(data);
};

const validateCategory = (data) => {
  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    description: Joi.string().max(200).allow(null, '')
  });
  return schema.validate(data);
};

module.exports = { validatePost, validateCategory };
