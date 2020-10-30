'use strict';

module.exports = {
  method: 'POST',
  path: '/api/clientdetails',
  options: {
    tags: ['api'],
    description: 'add new client',
    auth: 'jwt',
    plugins: { hacli: false },
     
  },
  handler: require('../handlers/addclientdetails')
};
