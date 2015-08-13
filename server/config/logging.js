var path = require('path');
var winston = require('winston');

module.exports = function (app) {

  var config = app.locals.config;
  var transports = [];

  if (config.logging.use.console === true) {
    transports.push(new(winston.transports.Console)({
      level: config.logging.console.level,
      timestamp: function () {
        return new Date().toISOString();
      }
    }));
  }

  if (config.logging.use.file === true) {
    transports.push(new(winston.transports.DailyRotateFile)({
      level: config.logging.file.level,
      datePattern: config.logging.file.rollingDatePattern,
      dirname: path.join(config.paths.root, config.logging.file.logsDirectory),
      filename: config.logging.file.appLogName,
      maxsize: config.logging.file.logFileMaxSize
    }));
  }

  var logger = new(winston.Logger)({
    levels: config.logging.levels,
    exitOnError: config.logging.exitOnError,
    transports: transports
  });

  app.locals.logger = logger;
};
