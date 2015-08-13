'use strict';

var path = require('path');

module.exports = function (app) {

  var config = app.locals.config;

  app.set('views', path.join(config.paths.root, config.views.viewPath));
  app.set('view engine', config.views.viewExt);
  app.engine(config.views.viewExt, config.views.engine);
};
