var model = angular.module('alurapic');

model.controller('FotosController', function($scope, $http){
	console.log(arguments);
	console.log($scope);
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	$http.get('v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	});
	

	$scope.remover = function(foto){
		$http.delete('v1/fotos/'+foto._id)
		.success(function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);

			$scope.mensagem = 'Foto '+ foto.titulo + ' foi removida com sucesso';
			console.log('Foto '+ foto.titulo + ' foi removida com sucesso');
		})
		.error(function(error){
			console.log(error);
			$scope.mensagem = 'Erro ao apagar a foto '+ foto.titulo;
			console.log('Erro ao apagar a foto '+ foto.titulo);
		});
	};

});