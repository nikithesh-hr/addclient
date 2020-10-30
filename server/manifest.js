'use strict';

try {
  const Inert = require('@hapi/inert');
  const Vision = require('@hapi/vision');
  const HapiSwagger = require('hapi-swagger');
   
  const auth = require('../plugins/auth');
  const client = require('../plugins/client')

 

  module.exports = {
    server: {
      app: {
        acl
      },
      port: process.env.PORT || 3004,
      routes: {
        cors: {
          origin: ['*'],
          credentials: true,
          additionalExposedHeaders: ['X-Total-Count']
        }
      },
      debug: {
        log: ['error'],
        request: ['error']
      }
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
              version
            },
            pathPrefixSize: 2,
            basePath: '/api',
            securityDefinitions: {
              Bearer: {
                type: 'apiKey',
                name: 'Authorization',
                in: 'header',
                'x-keyPrefix': 'Bearer'
              }
            },
            security: [{ Bearer: [] }]
          }
        },
        {
          plugin: require('@antoniogiordano/hacli'),
          options: {
            permissions: ['superadmin', 'admin']
          }
        },
        {
          plugin: require('nipo'),
          options: {
            pino: {
              prettyPrint: true
            }
          }
        },
        {
          plugin: auth
        },
        {
          plugin: client
        
        
        
        
        }
      ]
    }
  };
} catch (e) {
  console.log('manifest err ', e);
} finally {
  console.log('manifest loaded!');
}
