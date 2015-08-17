'use strict';

var express = require('express');
var ConfigValidator = require('./ConfigValidator');

module.exports = function (config) {

  ConfigValidator.validate(config, require("./schema.json"));

  var app = express();

  if (config.logging)
    require('./logging')(app, config.logging);

  require('./middleware')(app, config);

  if (config.views)
    require('./views')(app, config.views);

  if (config.routing)
    require('./routing')(app, config.routing);

  return app;
};
