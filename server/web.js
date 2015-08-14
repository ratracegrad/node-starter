var http = require('http');
var app = require("./app");

var appServer = http.createServer(app);
var config = app.locals.config;
var logger = app.locals.logger;

appServer.listen(config.server.port, function() {
  logger.debug('Web server listening on port ' + config.server.port);
  logger.debug("Web server started");
});
