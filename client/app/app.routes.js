(function(){
	
	var route = angular.module('route', ['ngRoute']);

	route.config(["$routeProvider", function($routeProvider){

		// Set up routes
		$routeProvider
			.when("/mytrips", {
				templateUrl: "components/myTrips/myTrips.html"
			})
	}]);

})();