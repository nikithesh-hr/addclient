'use strict';

const Boom = require('@hapi/boom');
const Clientdetails = require('../schemas/clientdetails');

module.exports = async (request, h) => {
  const { payload,clientname, dateofmeeting, message } = request;
   
  try {
 
    const data = Object.assign
    (payload, { clientname, dateofmeeting, message });
    console.log(request , 'data');
    const clientdetails = await Clientdetails.create(data);

    return {
      statusCode: 201,
      message: `clientdetails added`,
      data: {
        clientdetails
      }
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
