var Factual = require('factual-api');
var factual = new Factual('KEY', 'SECRET');
var fs = require('fs');
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

	  	// add each individual JSON object to the text file
	  	for (var i = 0; i < res.data.length; i++){

	  		var factualData = JSON.stringify(res.data[i]);
	  		var jsonFData = factualData + ", ";
	  		fs.appendFile('factual.txt', jsonFData, (err) => {
	  			if (err) throw err;
	  			console.log("It's saved.");
	  		});
	  	}
	});

	//  search restaurants or bars in New York
	factual.get('/t/places-us', {filters:{category_ids:{"$includes_any":[312,347]}}}, function (error, res) {
		console.log('### GENERAL ###');
	  	console.log(res.data);
	});
});