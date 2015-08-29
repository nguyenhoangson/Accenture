(function(){
	var myTrips	= angular.module("myTripsController", []);

	myTrips
		.controller("myTripsController", ["$scope", function($scope){
			$scope.trips = {
				upcoming: [],
				past: []
			};

			var upcomingTrips = [
			{
				name: "Upcoming 1"
			},{
				name: "Upcoming 2"
			}];

			var pastTrips = [
			{
				name: "Past 1"
			},{
				name: "Past 2"
			}];

			$scope.trips.upcoming = upcomingTrips;
			$scope.trips.past = pastTrips;

		}]);
})();