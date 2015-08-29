(function(){
	var transportation = angular.module("transportationController", []);

	transportation
		.controller("transportationController", ["$scope", function($scope){
			$scope.showFlight = function(){
				$scope.transport = true;
				$scope.flight = true;
			};

			$scope.showTransport = function(){
				$scope.transport = false;
				$scope.flight = false;
			};
		}]);
})();