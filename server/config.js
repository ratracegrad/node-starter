module.exports = (function() {
  'use strict';

  var path = require('path');

  var cfg = {};

  cfg.appLogName = 'WinstonLog.log';
  cfg.logFileMaxSize = 20000;
  cfg.logsDirectory = 'logs';
  cfg.rollingDatePattern = '.yyyy-MM-dd';

  //##############################################
  //############## Global Vars ###################
  //##############################################

  // Global Logging by Date on run()
  var winston = require('winston');
  var logger = new(winston.Logger)({
    exitOnError: false,
    transports: [
      new (winston.transports.DailyRotateFile)({
        datePattern: cfg.rollingDatePattern,
        dirname: path.join(__dirname, cfg.logsDirectory),
        filename: cfg.appLogName,
        maxsize: cfg.logFileMaxSize
      }),

      new (winston.transports.Console)({
        timestamp: function() { return new Date().toISOString(); }
      })
    ]
  });
  global.winston = logger;

  return cfg;
})();
