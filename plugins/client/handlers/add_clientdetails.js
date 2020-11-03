"use strict";

const Boom = require("@hapi/boom");
const Clientdetails = require("../schemas/clientdetails");

module.exports = async (request, h) => {
  const { payload } = request;
  const { clientname, dateofmeeting, message } = payload;

  /*
const cn = payload.clientname;
const dm = payload.dateofmeeting;
const ms = payload.message;

   const data = Object.assign(payload, 
    {cn, dm, ms });
  */

  const data = Object.assign(payload, { clientname, dateofmeeting, message });

  //const List = mongoose.model("List", listSchema);

  try {
    const clientdetail = await Clientdetails.create(data);
    //console.log(`client details is this ${clientdetails}`);
    return {
      statusCode: 201,
      message: `clientdetails added`,
      data: {
        clientdetail,
      },
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
