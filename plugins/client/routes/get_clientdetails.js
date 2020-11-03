"use strict";

module.exports = {
  method: "GET",
  path: "/api/getclientdetails",
  options: {
    tags: ["api"],
    description: "get announcement by id",
    //auth: 'jwt',
    plugins: { hacli: false },
  },
  handler: require("../handlers/get_clientdetails"),
};
