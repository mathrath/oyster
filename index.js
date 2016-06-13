var express = require('express');
var app = express();

var urls = require('./urls.js');

app.get('/', function(req, res){
	var randomURL = urls[Math.floor(Math.random() * urls.length)];
	res.redirect(randomURL);
});

app.listen(8080);
