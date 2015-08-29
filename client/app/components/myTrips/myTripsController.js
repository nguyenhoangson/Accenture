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
				name: "Upcoming 1",
				location: "Ho Chi Minh",
				details: "details 1"
			},{
				name: "Upcoming 2",
				location: "Singapore",
				details: "details 2"
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
				$scope.past = false;
			};
		}]);
})();