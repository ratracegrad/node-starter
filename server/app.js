'use strict';

var express = require('express');
var app = express();

require("./config/environment")(app);
require("./config/logging")(app);
require("./config/middleware")(app);
require('./config/express')(app);
require("./config/routes")(app);

module.exports = app;
