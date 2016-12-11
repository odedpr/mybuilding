'use strict';
const CURRENT_ENV = process.env.NODE_ENV || 'development';
var pjson = require('../../../package.json');
const bunyan = require('bunyan');
let logLevel = 'debug';


if (CURRENT_ENV === 'master') {
  logLevel = 'debug';
} else if (CURRENT_ENV === 'staging') {
  logLevel = 'debug';
} else if (CURRENT_ENV === 'test') {
  logLevel = 'fatal';
}

module.exports = bunyan.createLogger({
  name: `compliance-${CURRENT_ENV}-${pjson.name}`,
  serializers: bunyan.stdSerializers,
  src: true,
  streams: [
    {
      stream: process.stdout,
      level: logLevel
    }
  ]
});
