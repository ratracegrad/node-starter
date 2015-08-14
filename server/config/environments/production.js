'use strict';

var path = require('path');

// Production Settings
module.exports = {
  logging: {
    use: {
      console: true,
      file: true
    },
    console: {
      // Reduced logging level to console
      level: 'info'
    }
  },
  server: {
    env: "production"
  }
};
