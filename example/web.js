var http = require('http');
var nodestarter = require("../index");

var app = nodestarter(require('./app-config'));
var appServer = http.createServer(app);
var logger = app.locals.logger;
var port = process.env.PORT || 3001;

appServer.listen(port, function () {
  logger.debug('Web server listening on port ' + port);
  logger.debug('Web server started');
});
