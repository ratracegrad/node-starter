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

var port = (process.env.PORT || 5000);
app.set('port', port);
app.listen(app.get('port'));
console.log('Listening on port:' + port + '...');
