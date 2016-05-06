angular.module('alurapic').controller('GruposController', function($scope, $http){
	$scope.grupos = [];

	$http.get('v1/grupos')
	.success(function(data){
		$scope.grupos = data;
	})
	.error(function(error){
		console.log(error);
	});
});