(function(){

	var express = require('express');
	var path = require('path');
	var app = express();

	app	
		.use("/app",express.static(path.join(__dirname + "/client/app")))
		.use("/assets",express.static(__dirname + "/client/assets"))
		.get('/', function(req, res){
			res.sendFile(__dirname + "/client/index.html");
		})
		.listen(8080);
})();