"use strict";

const Joi = require("@hapi/joi");

module.exports = {
  params: Joi.object({ id: Joi.string().required() }),
  payload: Joi.object({
    clientname: Joi.string(),
    dateofmeeting: Joi.string(),
    message: Joi.string(),
    pinned: Joi.boolean(),
  }),
};
