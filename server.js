(function(){

	var express = require('express');
	var path = require('path');
	var app = express();
	var bodyParser = require('body-parser');

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
		.use("/mytrips/assets", express.static(__dirname + "/client/assets"))
		.use("/mytrips/app/components/myTrips/myTripsController.js", express.static(__dirname + "/client/app/components/myTrips/myTripsController.js"))
		
		// Serve controllers 
		.use("/", express.static(__dirname + "/client/app/components"))

		// addTripsController.js
		.use("/addTripsController.js", express.static(__dirname + "/client/app/components/myTrips/addTripsController.js"))
		
		.use("/transportationController.js", express.static(__dirname + "/client/app/components/myTrips/transportationController.js"))
		
		.use(bodyParser.json())
		.use(bodyParser.urlencoded({ extended: true }))

		// Landing page
		.get('/', function(req, res){

			// If logged-in, then server index.html file
			res.sendFile(__dirname + "/client/index.html");

		})


		// 
		.get("/lasttrip.html", function(req, res){
			res.sendFile(__dirname + "/client/app/components/myTrips/lastTrip.html");
		})

		// Add trip page
		.get("/trips.html", function(req, res){
			res.sendFile(__dirname + "/client/app/components/myTrips/addTrips.html");
		})

		.get("/mytrips/trips.html", function(req, res){
			res.sendFile(__dirname + "/client/app/components/myTrips/addTrips.html");
		})
		
		// Login page
		.get("/login", function(req, res){
			res.sendFile(__dirname + "/client/app/components/login/login.html");
		})


		// Transportation
		.get("/transportation", function(req, res){
			res.sendFile(__dirname + "/client/app/components/myTrips/transportation.html");
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

		.get("/mytrips", function(req, res){
			res.sendFile(__dirname + "/client/app/components/myTrips/myTrips.html");
		})

		.get("/upcomingTrip", function(req, res){
			res.sendFile(__dirname + "/client/app/components/myTrips/upcomingTrip.html");
		})
		// Add trips
		.post("/trips", function(req, res){

			// Add data to persistence mechanism
			console.log(req.body);

			// Redirect to mytrips page
			res.redirect("/mytrips");
		})


		// // APIs
		// .get("/trips", function(req, res){

		// })

		.listen(8080);	
})();