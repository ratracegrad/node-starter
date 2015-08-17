'use strict';

var middlewareConfig = require('./config');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var compression = require('compression');
var errorhandler = require('errorhandler');

module.exports = function (app, config) {

  config = middlewareConfig(config);

  var env = app.get('env');

  if (config.cors.enabled)
    app.use(cors());

  if (config.methodOverride.enabled)
    app.use(methodOverride());

  if (config.cookies.enabled)
    app.use(cookieParser());

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(bodyParser.json());

  if (config.compression.enabled)
    app.use(compression());

  if (env === 'development' || env === 'test') {
    app.use(errorhandler());
  }
};
