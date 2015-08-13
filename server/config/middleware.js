var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var compression = require('compression');
var errorhandler = require('errorhandler');

module.exports = function (app) {
  var env = app.get('env');

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
