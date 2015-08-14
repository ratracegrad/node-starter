'use strict';

module.exports = function(app) {

  var path = require('path');
  var logger = app.locals.logger;
  var views = app.locals.config.views.path;
  var ext = app.locals.config.views.ext;

  app.get("/", function (req, res) {
    logger.warn('No root route defined');
    res.sendFile(path.join(views, 'index.'+ext));
  });
};
