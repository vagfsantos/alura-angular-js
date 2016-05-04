angular.module('alurapic')
.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/new', {
		templateUrl: 'partials/foto.html',
		controller: 'FotoControllerCadastro'
	});

	$routeProvider.when('/fotos/edit/:fotoId', {
		templateUrl: 'partials/foto.html',
		controller: 'FotoControllerCadastro'
	});

	$routeProvider.otherwise({ redirectTo: '/fotos' });
});