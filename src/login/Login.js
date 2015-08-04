var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('src/login/login.html');
});

module.exports = router;