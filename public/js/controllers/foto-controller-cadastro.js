angular.module('alurapic')
.controller('FotoControllerCadastro', function($scope, $routeParams, recursoFoto){

	$scope.foto = {}
	$scope.mensagem = '';


	if($routeParams.fotoId){
		recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
			$scope.foto = foto;
		}, function(error){
			console.log(error);
			$scope.mensagem = 'Não foi possível carregar a foto.'
		});
	}

	$scope.submeter = function(){
		if($scope.formulario.$valid){
			if($scope.foto._id){
				recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
					$scope.mensagem = 'Foto cadastrada com sucesso';
				}, function(error){
					$scope.mensagem = 'não foi possivel alterar a foto';
					console.log(error);
				});

			} else{
				recursoFoto.save($scope.foto, function(){
					$scope.foto = {}
					$scope.mensagem = 'Foto cadastrada com sucesso';
				}, function(error){
					$scope.mensagem = 'não foi possivel incluir a foto';
					console.log(error);
				});
			}
		}
	}
});