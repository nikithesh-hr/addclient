"use strict";
exports.plugin = {
  name: "announcements",
  version: "1.0.0",
  register: (server, options) => {
    // routes
    server.route(require("./routes/add_clientdetails"));
    server.route(require("./routes/edit_clientdetails"));
    server.route(require("./routes/get_clientdetails"));
    server.route(require("./routes/remove_clientdetails"));
  },
};
