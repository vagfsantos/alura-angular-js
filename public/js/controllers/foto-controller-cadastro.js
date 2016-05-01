angular.module('alurapic')
.controller('FotoControllerCadastro', function($scope){
	$scope.foto = {}
	
	$scope.submeter = function(){
		console.log($scope.foto);
	}
});