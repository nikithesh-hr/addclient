"use strict";

const Boom = require("@hapi/boom");
const Clientdetails = require("../schemas/clientdetails");

module.exports = async (request, h) => {
  const { payload, params } = request;

  //const {payload} = request;
  //const { clientname, dateofmeeting, message} = payload;
  const options = { useFindAndModify: false, new: true };
  try {
    const clientdetails = await Clientdetails.findOneAndUpdate(
      { _id: params.id },
      payload,
      options
    );

    if (!clientdetails) {
      return Boom.badRequest("invalid announcement id");
    }

    return {
      statusCode: 204,
      message: "announcement updated!",
      announcement,
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
