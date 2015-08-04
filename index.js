var express = require('express');
var app = express();

//##############################################

// Custom Route Mapping
app.use('/login', require('./src/login/Login'));

//##############################################

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);

//##############################################

// Home Page
app.get('/', function(req, res) {
	res.render('index.html');
});

//##############################################

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'));