"use strict";

module.exports = {
  method: "DELETE",
  path: "/api/clientdetails/{id}",
  options: {
    tags: ["api"],
    description: "remove announcement",
    //auth: 'jwt',
    plugins: { hacli: false },
    validate: require("../validations/remove_clientdetails"),
  },
  handler: require("../handlers/remove_clientdetails"),
};
///{clientname}
