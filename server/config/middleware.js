'use strict';

var bodyParser = require('body-parser');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var errorhandler = require('errorhandler');
var methodOverride = require('method-override');

module.exports = function(app) {
  var env = app.locals.config.server.env;

  app.use(cors());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(compression());

  if (env === 'development' || env === 'test') {
    app.use(errorhandler());
  }
};
