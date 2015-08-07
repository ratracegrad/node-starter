// Required Modules
var express = require('express');
var cors = require('cors');

var app = express().use(cors());

//###############################################

// Custom Route Mapping
app.use('/login', require('./src/login/Login'));

//###############################################

// Setting views folder/engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Including our resources
app.use(express.static('app'));
app.use(express.static('assets'));

//###############################################

// Home Page
app.get('/', function(req, res) {
	res.render('index.html');
});

//###############################################

var port = (process.env.PORT || 5000);
app.set('port', port);
app.listen(app.get('port'), function() {
  console.log('Listening on port:' + port + '...');
});
