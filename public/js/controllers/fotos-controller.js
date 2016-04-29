var model = angular.module('alurapic');

model.controller('FotosController', function($scope, $http){
	console.log(arguments);
	console.log($scope);
	
	$scope.fotos = [];

	$http.get('v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	});
	

	// ajax
	// var promise = $http.get('v1/fotos');
	// promise.then(function(retorno){
	// 	console.log(retorno);
	// 	$scope.fotos = retorno.data;
	// }).catch(function(error){
	// 	console.log(error);
	// });

});