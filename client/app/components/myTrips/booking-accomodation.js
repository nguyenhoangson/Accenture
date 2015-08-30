(function(){
	var myTrips	= angular.module("myBookingAccomodationController", []);

	myTrips
		.controller("myBookingAccomodationController", ["$scope", function($scope){
			$scope.trips = {
				bookings: []
			};


			var hotels = [
			{
				name: "Marina Bay Sand",
				address: "39 Orchard Link",
				img: "../assets/image/image1.jpg",
				price : "50$"
			},
			{
				name: "NTU",
				address: "40 Orchard Link",
				img: "../assets/image/image2.jpg",
				price : "55$"
			},
			{
				name: "NUS",
				address: "41 Orchard Link",
				img: "../assets/image/image3.jpg",
				price : "20$"
			},
			{
				name: "SMU",
				address: "42 Orchard Link",
				img: "../assets/image/image4.jpg",
				price : "45$"
			},
			{
				name: "German Hotels",
				address: "39 Orchard Link",
				img: "../assets/image/image5.jpg",
				price : "70$"
			},
			{
				name: "Kazahtan",
				address: "39 Orchard Link",
				img: "../assets/image/image6.jpg",
				price : "90$"
			}

			];

			$scope.trips.bookings = hotels;
	
		}]);
})();