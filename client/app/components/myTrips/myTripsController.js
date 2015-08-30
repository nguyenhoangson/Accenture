(function(){
	var myTrips	= angular.module("myTripsController", []);

	myTrips
		.controller("myTripsController", ["$scope","$location", function($scope, $location){
			$scope.trips = {
				upcoming: [],
				past: []
			};

			var upcomingTrips = [
			{
				name: "Meeting new partner",
				location: "Ho Chi Minh",
				details: "This trip will take only 2-3 days",
				img:"../assets/image/image1.jpg"
			},
			{
				name: "Global Conference",
				location: "Singapore",
				details: "7 days technical summit",
				img:"../assets/image/image2.jpg"
			},
			{
				name: "Global Conference",
				location: "Singapore",
				details: "7 days technical summit",
				img:"../assets/image/image3.jpg"
			},
			{
				name: "Agriculture Conference",
				location: "Vietnam",
				details: "7 days argicultural summit",
				img:"../assets/image/image4.jpg"
			},
			{
				name: "Global Conference",
				location: "Brunei",
				details: "7 days technical summit",
				img:"../assets/image/image5.jpg"
			},
			];

			var pastTrips = [
			{
				name: "Hackathon",
				location: "Vietnam",
				details: "../assets/image/image_past1.jpg"
			},
			{
				name: "Agriculture Conference",
				location: "Singapore",
				details: "../assets/image/image_past2.jpg"
			},
						{
				name: "Technology Conference",
				location: "Germany",
				details: "../assets/image/image_past3.jpg"
			},
						{
				name: "Business Meeting",
				location: "England",
				details: "../assets/image/image_past4.jpg"
			},
						{
				name: "Global Conference",
				location: "Holland",
				details: "../assets/image/image_past5.jpg"
			},
						{
				name: "Aquisition Meeting",
				location: "Brunei",
				details: "../assets/image/image_past6.jpg"
			},
			];

			$scope.trips.upcoming = upcomingTrips;
			$scope.trips.past = pastTrips;

			$scope.isActive = function(location){
				console.log($location.path());
				return location === $location.path();
			};

			$scope.showAdd = function(){
				$scope.showed = true;
			};

			$scope.showUpcomingTrips = function(){
				$scope.upcoming = true;
				$scope.past = true;
			};

			$scope.showPastTrips = function(){
				$scope.upcoming = false;
				$scope.past = false;
			};
		}]);
})();