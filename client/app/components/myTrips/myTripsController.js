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
				img:"../assets/image/hcm.jpg"
			},{
				name: "Global Conference",
				location: "Singapore",
				details: "7 days technical summit",
				img:"../assets/image/Singapore_image_1.jpg"
			}];

			var pastTrips = [
			{
				name: "Past 1",
				location: "Indonesia",
				details: "details 1"
			},{
				name: "Past 2",
				location: "Vietnam",
				details: "details 2"
			}];

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