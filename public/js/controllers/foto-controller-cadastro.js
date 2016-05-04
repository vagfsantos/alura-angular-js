angular.module('alurapic')
.controller('FotoControllerCadastro', function($scope, $http, $routeParams){
	$scope.foto = {}
	$scope.mensagem = '';

	if($routeParams.fotoId){
		$http.get('/v1/fotos/'+$routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(error){
			console.log(error);
			$scope.mensagem = 'Não foi possível carregar a foto.'
		});
	}

	$scope.submeter = function(){
		if($scope.formulario.$valid){
			if($scope.foto._id){
				
				$http.put('v1/fotos/'+$scope.foto._id, $scope.foto)
				.success(function(){
					$scope.mensagem = 'Foto cadastrada com sucesso';
				})
				.error(function(erro){
					$scope.mensagem = 'não foi possivel alterar a foto';
					console.log(erro);
				});

			} else{
				$http.post('v1/fotos', $scope.foto)
				.success(function(){
					$scope.foto = {}
					$scope.mensagem = 'Foto cadastrada com sucesso';
				})
				.error(function(erro){
					$scope.mensagem = 'não foi possivel incluir a foto';
					console.log(erro);
				});
			}
		}
	}
});