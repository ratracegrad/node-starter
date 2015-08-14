'use strict';

var path = require('path');

module.exports = function(app) {

  var config = app.locals.config;

  app.set('views', path.join(config.paths.root, config.views.path));
  app.set('view engine', config.views.ext);
  app.engine(config.views.ext, config.views.engine);
};
