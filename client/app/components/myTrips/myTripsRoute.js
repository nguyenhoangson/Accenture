(function(){
	var route = angular.module("myTripsRoute", ["ngRoute"]);

	route.config(function($routeProvider){

		// Set up routes
		$routeProvider
			.when("/upcoming", {
				templateUrl: ""
			})
			.when("/past", {
				templateUrl: ""
			})
	});
})();