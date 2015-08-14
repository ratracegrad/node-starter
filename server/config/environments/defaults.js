'use strict';

var path = require('path'l);
var ejs = require('ejs');

module.exports = {
  logging: {
    exitOnError: false,
    use: {
      console: true,
      file: true
    },
    console: {
      level: 'debug'
    },
    file: {
      level: 'warn',
      appLogName: 'Application.log',
      logFileMaxSize: 20000,
      logsDirectory: 'logs',
      rollingDatePattern: '.yyyy-MM-dd'
    },
    levels: {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    }
  },
  paths: {
    root: path.normalize(__dirname + '/../../..')
  },
  security: {
    secrets: {}
  },
  server: {
    port: process.env.PORT || 8080,
    env: process.env.NODE_ENV || "development"
  },
  views: {
    viewPath: path.join('server', 'views'),
    viewExt: 'html',
    engine: ejs.renderFile
  }
};
