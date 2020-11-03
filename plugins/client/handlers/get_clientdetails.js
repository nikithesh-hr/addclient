"use strict";

const Boom = require("@hapi/boom");
const Clientdetails = require("../schemas/clientdetails");

module.exports = async (request, h) => {
  try {
    const clientdetails = await Clientdetails.find();

    return {
      statusCode: 200,
      message: `client details`,
      data: {
        clientdetails,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
