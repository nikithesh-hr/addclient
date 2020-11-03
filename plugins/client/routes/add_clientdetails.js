"use strict";

module.exports = {
  method: "POST",
  path: "/api/addclientdetails",
  options: {
    tags: ["api"],
    description: "add new client",
    //auth: 'jwt',
    plugins: { hacli: false },
    validate: require("../validations/add_clientdetails"),
  },
  handler: require("../handlers/add_clientdetails"),
};
