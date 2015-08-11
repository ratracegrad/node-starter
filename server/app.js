// Required Modules
var cors = require('cors');
var express = require('express');
var cfg = require('./config');

var app = express().use(cors());

//###############################################
//############## Route Handler ##################
//###############################################


//###############################################
//############### View Engine ###################
//###############################################

// Setup to use HTML for Views
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//###############################################

// Home Page
app.get('/', function(req, res) {
	res.render('index.html');
});

//###############################################
//################ Run Server ###################
//###############################################

var port = (process.env.PORT || 5000);
app.set('port', port);
app.listen(app.get('port'), function() {
  global.winston.log('info', 'Listening on port:'+port+'...');
});
