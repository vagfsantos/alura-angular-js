var model = angular.module('alurapic');

model.controller('FotosController', function($scope){
	console.log(arguments);
	console.log($scope);
	$scope.foto = {
		titulo:'Leão',
		url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
	}
});