var dataApp = angular.module('dataApp', ['ui.bootstrap', 'ngRoute']);

dataApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/data/:series', {
		templateUrl: '/partials/data.html',
		controller: 'dataCtrlr'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);

dataApp.controller('dataCtrlr', ['$scope', '$http', '$routeParams',
	function($scope, $http, $routeParams) {
		//Your controller code goes here
		$scope.loadData = function() {
			var url = '/data/' + $routeParams.series;
			$http.get(url).then(function(response){ $scope.data = response.data; });
		}
		$scope.loadData();
	}
]);
