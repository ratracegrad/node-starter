'use strict';

var path = require('path');

// Test Settings
module.exports = {
  logging: {
    file: {
      logsDirectory: path.join('logs', 'QA')
    }
  },
  server: {
    env: "test"
  }
};
