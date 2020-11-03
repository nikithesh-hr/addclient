"use strict";

const Boom = require("@hapi/boom");
const Clientdetails = require("../schemas/clientdetails");

module.exports = async (request, h) => {
  const { params } = request;
  console.log(params, "params:");

  const checkedItemId = params.id;
  try {
    const clientdetails = await Clientdetails.findByIdAndRemove(
      checkedItemId,
      function (err) {
        if (!err) {
          console.log("Successfully deleted checked item.");
        }
      }
    );

    return {
      statusCode: 204,
      message: "clientdetails removed",
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
