const Joi = require("@hapi/joi");

module.exports = {
  payload: Joi.object({
    clientname: Joi.string().required(),
    dateofmeeting: Joi.string().required(),

    message: Joi.string().required(),
  }),
};
