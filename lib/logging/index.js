'use strict';

var fs = require('fs');
var path = require('path');
var winston = require('winston');
var ConfigValidator = require('../ConfigValidator');
var loggingConfig = require('./config');

module.exports = function(app, config)
{
  ConfigValidator.validate(config, require("./schema.json"));
  config = loggingConfig(config);

  var transports = [];

  if (config.console.enabled)
  {
    transports.push(new(winston.transports.Console)(
    {
      level: config.console.level,
      timestamp: function()
      {
        return new Date().toISOString();
      }
    }));
  }

  if (config.file.enabled)
  {
    try
    {
      fs.statSync(config.file.logsDirectory);
    }
    catch (err)
    {
      fs.mkdirSync(config.file.logsDirectory);
    }

    transports.push(new(winston.transports.DailyRotateFile)(
    {
      level: config.file.level,
      datePattern: config.file.rollingDatePattern,
      dirname: config.file.logsDirectory,
      filename: config.file.appLogName,
      maxsize: config.file.logFileMaxSize
    }));
  }

  var logger = new(winston.Logger)(
  {
    levels: config.levels,
    exitOnError: config.exitOnError,
    transports: transports
  });

  app.locals.logger = logger;
};
