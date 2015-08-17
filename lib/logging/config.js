'use strict';

module.exports = function (config) {

  // GENERAL

  config.exitOnError = (config.exitOnError === true);
  config.levels = config.levels || {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };

  // Transport: CONSOLE

  config.console = config.console || {};
  config.console.enabled = (config.console.enabled !== false);
  config.console.level = config.console.level || "warn";

  // Transport: FILE

  config.file = config.file || {};
  config.file.enabled = (config.file.enabled !== false);
  config.file.level = config.file.level || "debug";
  config.file.rollingDatePattern = config.file.rollingDatePattern || ".yyyy-MM-dd";
  config.file.logFileMaxSize = config.file.logFileMaxSize || 20000;

  return config;
};
