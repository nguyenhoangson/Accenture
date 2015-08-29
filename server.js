(function(){

	var express = require('express');
	var app = express();

	app	
		.get('/', function(req, res){
			res.send("Hello the world");
		})
		.listen(8080);
})();