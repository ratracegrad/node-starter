'use strict';

var path = require('path');

// Test Settings
module.exports = {
  logging: {
    exitOnError: false,
    use: {
      console: true,
      file: true
    },
    console: {
      level: 'info'
    },
    file: {
      level: 'warn',
      appLogName: 'Application.log',
      logFileMaxSize: 20000,
      logsDirectory: path.join('logs', 'QA'),
      rollingDatePattern: '.yyyy-MM-dd'
    },
    levels: {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    }
  },
  server: {
    port: process.env.PORT || 8080,
    env: 'test'
  }
};
