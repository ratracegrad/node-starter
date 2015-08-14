var _ = require('lodash');

module.exports = function(app) {
  'use strict';

  var env = app.get('env');

  var config = _.extend(
    require("./environments/defaults"),
    require("./environments/" + env)
  );

  app.locals.config = config;

  return config;
};
