'use strict';

var path = require('path');
var ConfigValidator = require('../ConfigValidator');

module.exports = function (app, config) {

  ConfigValidator.validate(config, require("./schema.json"));

  app.set('views', config.viewPath);
  app.set('view engine', config.viewExt);
  app.engine(config.viewExt, config.engine);
};
