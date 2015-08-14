'use strict';

var path = require('path');

// Development Settings
module.exports = {
  logging: {
    file: {
      logsDirectory: path.join('logs', 'DEV')
    }
  }
};
