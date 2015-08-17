## node-starter

A basic NodeJS starter template. This template is designed to give any NodeJS project an easy running start that includes some of the most common features vital to the Client/Server relationship model of most modern day web applications.


NodeStarter provides easy initializaton/customization of these features:

  1. Logging
  2. Express Middleware
  3. Express View Engine
  4. Express Routing
  5. Express Security

Here is a list of some of those features:

    1. CORS (Cross Origin Request Policy)
    2. Winston for Smart Server Logging
    3. ...and more!

Sample usage of node-starter:

```
var http = require('http');
var nodestarter = require('node-starter');

var appConfig = require('./my-config');
var app = nodestarter(appConfig);
var appServer = http.createServer(app);
var port = app.locals.config.server.port;
var logger = app.locals.logger;

appServer.listen(port, function () {
  logger.debug('Web server listening on port ' + port);
  logger.debug('Web server started');
});

```

Sample configuration file:

```
var path = require("path");
var ejs = require("ejs");

module.exports = {
  "logging": {
    "exitOnError": false,
    "use": {
      "console": true,
      "file": true
    },
    "console": {
      "level": 'debug'
    },
    "file": {
      "level": 'warn',
      "appLogName": 'WinstonLog.log',
      "logFileMaxSize": 20000,
      "logsDirectory": 'logs',
      "rollingDatePattern": '.yyyy-MM-dd'
    }
  },
  "paths": {
    "root": path.normalize(__dirname + '/../../..')
  },
  "security": {
    "secrets": {}
  },
  "server": {
    "port": process.env.PORT || "3001",
    "env": process.env.NODE_ENV || "development"
  },
  "views": {
    "viewPath": path.join('server', 'views'),
    "viewExt": 'html',
    "engine": ejs.renderFile
  }
}
```