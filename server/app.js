'use strict';

// Set default node environment to development
// HINT: Change this if you would like to set it to `production` or so
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var cors = require('cors');
var express = require('express');
var cfg = require('./config/environment');


// Setup Server
var app = express().use(cors());
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

//###############################################
//################ Run Server ###################
//###############################################

server.listen(cfg.port, cfg.ip, function() {
  global.winston.log('info', 'Node Server listening on %d, in %s mode', cfg.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
