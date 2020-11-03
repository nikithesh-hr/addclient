"use strict";

module.exports = {
  method: "PATCH",
  path: "/api/edit_clientdetails/{id}",
  options: {
    tags: ["api"],
    description: "eddit_clientdetails",
    //auth: 'jwt',
    plugins: { hacli: false },
    validate: require("../validations/edit_clientdetails"),
  },
  handler: require("../handlers/edit_clientdetails"),
};
