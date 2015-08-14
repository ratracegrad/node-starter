'use strict';

module.exports = function(app) {

  var ext = app.locals.config.views.ext;
  var logger = app.locals.logger;
  var path = require('path');
  var views = app.locals.config.views.path;

  app.get("/", function (req, res) {
    logger.info('Returning index.html...');
    res.sendFile(path.join(views, 'index.'+ext));
  });
};
