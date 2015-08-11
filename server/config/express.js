/**
 * Express Configuration
 */

'use strict';

var compression = require('compression');
var cfg = require('./environment');
var errorhandler = require('errorhandler');
var express = require('express');
var path = require('path');

module.exports = function(app) {
  var env = app.get('env');

  app.set('views', path.join(cfg.root, 'server', 'views'));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());

  if(env === 'production') {
    // Run Prod Setup
  } else if(env === 'development' || env === 'test') {
    // Run Dev Setup
    app.use(errorhandler());
  } else {
    global.winston.log('warn', '%s is an unsupported environment configuration!', env);
  }
};
