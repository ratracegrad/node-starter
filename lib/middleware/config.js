'use strict';

module.exports = function (config) {

  // COMPRESSION

  config.compression = config.compression || {};
  config.compression.enabled = (config.compression.enabled !== false);

  // COOKIES

  config.cookies = config.cookies || {};
  config.cookies.enabled = (config.cookies.enabled !== false);

  // CORS

  config.cors = config.cors || {};
  config.cors.enabled = (config.cors.enabled !== false);

  // METHOD OVERRIDE

  config.methodOverride = config.methodOverride || {};
  config.methodOverride.enabled = (config.methodOverride.enabled !== false);

  return config;
};
