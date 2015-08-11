module.exports = (function() {
  'use strict';

  var path = require('path');
  var _ = require('lodash');

  var cfg = {
    appLogName: 'WinstonLog.log',
    logFileMaxSize: 20000,
    // Relative from root
    logsDirectory: 'server/logs',
    root: path.normalize(__dirname + '/../../..'),
    rollingDatePattern: '.yyyy-MM-dd',
    port: process.env.PORT || 8888,
    env: process.env.NODE_ENV,
    secrets: {},
  };

  //##############################################
  //################## Logging ###################
  //##############################################

  // Global Logging by Date on run()
  var winston = require('winston');
  var logger = new(winston.Logger)({
    exitOnError: false,
    transports: [
      new (winston.transports.DailyRotateFile)({
        datePattern: cfg.rollingDatePattern,
        dirname: path.join(cfg.root, cfg.logsDirectory),
        filename: cfg.appLogName,
        maxsize: cfg.logFileMaxSize
      }),

      new (winston.transports.Console)({
        timestamp: function() { return new Date().toISOString(); }
      })
    ]
  });
  global.winston = logger;

  //##############################################

  return _.merge(cfg, require("./"+process.env.NODE_ENV+'.js') || {});
})();
