var Factual = require('factual-api');
var factual = new Factual('KEY', 'SECRET');
var monkey = require('node-monkey').start({host: "127.0.0.1", port:"50500"});
var express = require('express');
var app = express();

app.get('/', function(req, res){

	monkey.attachConsole();
	res.send('Express on HTML');

});

app.listen(3434, function(){
	console.log('Magic happens on port 3434');

	//  search for Starbucks in New York
	factual.get('/t/places-us', {q:"starbucks", filters:{"locality":"new york"}}, function (error, res) {
		console.log('### STARBUCKS ###');
	  	console.log(res.data);
	});

	//  search restaurants or bars in New York
	factual.get('/t/places-us', {filters:{category_ids:{"$includes_any":[312,347]}}}, function (error, res) {
		console.log('### GENERAL ###');
	  	console.log(res.data);
	});
});