"use strict";

try {
  const Inert = require("@hapi/inert");
  //inert provides new handler methods for serving static files and
  //directories, as well as adding a h.file() method to the toolkit, which can respond with file based resources.
  const Vision = require("@hapi/vision");
  //vision decorates the server,
  //request, and
  //h response toolkit interfaces with additional
  //methods for managing view engines that can be used to render templated responses.

  //vision also provides a built-in handler implementation for creating templated responses.
  const HapiSwagger = require("hapi-swagger");

  //used for api documentation

  //const auth = require('../plugins/auth');
  const client = require("../plugins/client");

  const version = "1";
  module.exports = {
    server: {
      app: {},
      port: process.env.PORT || 3004,
      routes: {
        cors: {
          origin: ["*"],
          credentials: true,
          additionalExposedHeaders: ["X-Total-Count"],
        },
      },
      debug: {
        log: ["error"],
        request: ["error"],
      },
    },
    register: {
      plugins: [
        Inert,
        Vision,
        {
          plugin: HapiSwagger,
          options: {
            info: {
              title: `addclient ${version}`,
              version,
            },
            pathPrefixSize: 2,
            basePath: "/api",
            securityDefinitions: {
              Bearer: {
                type: "apiKey",
                name: "Authorization",
                in: "header",
                "x-keyPrefix": "Bearer",
              },
            },
            security: [{ Bearer: [] }],
          },
        },
        {
          plugin: require("@antoniogiordano/hacli"),
          options: {
            permissions: ["superadmin", "admin"],
          },
        },
        {
          plugin: require("nipo"),
          options: {
            pino: {
              prettyPrint: false,
            },
          },
        },

        {
          plugin: client,
        },
      ],
    },
  };
} catch (e) {
  console.log("manifest err ", e);
} finally {
  console.log("manifest loaded!");
}
