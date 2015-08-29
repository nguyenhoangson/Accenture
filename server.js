(function(){

	var express = require('express');
	var path = require('path');
	var app = express();

	app	

		.use("/app",express.static(path.join(__dirname + "/client/app")))

		// Serve partials
		.use("/components", express.static(__dirname + "/client/app/components"))

		// Serve lib
		.use("/assets/lib",express.static(__dirname + "/client/assets/lib"))

		// Serve all css files
		.use("/assets/css",express.static(__dirname + "/client/assets/css"))

		// Serve all *.js files
		.use("/assets/js", express.static(__dirname + "/client/assets/js"))

		// Serve images
		.use("/assets/image", express.static(__dirname + "/client/assets/image"))

		// Serve controllers 
		.use("/", express.static(__dirname + "/client/app/components"))

		// Landing page
		.get('/', function(req, res){

			// If logged-in, then server index.html file
			res.sendFile(__dirname + "/client/index.html");

		})

		// 
		.get("/lasttrip.html", function(req, res){
			res.sendFile(__dirname + "/client/app/components/myTrips/lastTrip.html");
		})
		// Login page
		.get("/login", function(req, res){
			res.sendFile(__dirname + "/client/app/components/login/login.html");
		})

		.get("/booking-accomodation.html", function(req, res){
			res.sendFile(__dirname + "/client/app/components/myTrips/booking-accomodation.html");
		})

		.get("/booking-accomodation-detail.html", function(req, res){
			res.sendFile(__dirname + "/client/app/components/myTrips/booking-accomodation-detail.html");
		})

		.get("/booking-accomodation.js", function(req, res){
			res.sendFile(__dirname + "/client/app/components/myTrips/booking-accomodation.js");
		})



		// My Trips
		// .get("/mytrips", function(req, res){
		// 	res.sendFile(__dirname + "/client/app/components/myTrips/myTrips.html");
		// })

		.listen(8080);	
})();