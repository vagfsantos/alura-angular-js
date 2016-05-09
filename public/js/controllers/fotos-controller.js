var model = angular.module('alurapic');

model.controller('FotosController', function($scope, recursoFoto){
	console.log(arguments);
	console.log($scope);
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	}, function(error){
		console.log(error);
	});

	// $http.get('v1/fotos')
	// .success(function(fotos){
	// 	$scope.fotos = fotos;
	// })
	// .error(function(erro){
	// 	console.log(erro);
	// });
	

	$scope.remover = function(foto){
		recursoFoto.delete({fotoId : foto._id}, function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto '+ foto.titulo + ' foi removida com sucesso';
			console.log('Foto '+ foto.titulo + ' foi removida com sucesso');

		}, function(){
			console.log(error);
			$scope.mensagem = 'Erro ao apagar a foto '+ foto.titulo;
			console.log('Erro ao apagar a foto '+ foto.titulo);

		});
	};

});