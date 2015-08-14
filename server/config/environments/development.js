'use strict';

var path = require('path');

// Development Settings
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
      logsDirectory: path.join('logs', 'DEV'),
      rollingDatePattern: '.yyyy-MM-dd'
    },
    levels: {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    }
  },
};
