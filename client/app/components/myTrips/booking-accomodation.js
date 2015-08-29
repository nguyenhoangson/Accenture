(function(){
	var myTrips	= angular.module("myBookingAccomodationController", []);

	myTrips
		.controller("myBookingAccomodationController", ["$scope", function($scope){
			$scope.trips = {
				bookings: []
			};


			var hotels = [
			{
				name: "Hotel 1",
				address: "39 Orchard Link",
				img: "details 1",
				price : "50$"
			},
			{
				name: "Hotel 2",
				address: "40 Orchard Link",
				img: "details 1",
				price : "55$"
			},
			{
				name: "Past 1",
				address: "41 Orchard Link",
				img: "details 1",
				price : "60$"
			},

			{
				name: "Past 1",
				address: "42 Orchard Link",
				img: "details 1",
				price : "65$"
			}];

			$scope.trips.bookings = hotels;
	
		}]);
})();