(function(){

	var express = require('express');
	var path = require('path');
	var app = express();

	app	

		.use("/app",express.static(path.join(__dirname + "/client/app")))

		// Serve lib
		.use("/assets/lib",express.static(__dirname + "/client/assets/lib"))

		// Serve all css files
		.use("/assets/css",express.static(__dirname + "/client/assets/css"))

		// Serve all *.js files
		.use("/assets/js", express.static(__dirname + "/client/assets/js"))

		// Serve controllers 
		.use("/", express.static(__dirname + "/client/app/components/myTrips"))

		// Landing page
		.get('/', function(req, res){

			// If logged-in, then server index.html file
			res.sendFile(__dirname + "/client/index.html");

		})

		// Login page
		.get("/login", function(req, res){
			res.sendFile(__dirname + "/client/app/components/login/login.html");
		})

		// My Trips
		.get("/mytrips", function(req, res){
			res.sendFile(__dirname + "/client/app/components/myTrips/myTrips.html");
		})

		.listen(8080);	
})();