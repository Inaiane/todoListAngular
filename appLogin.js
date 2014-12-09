var app = angular.module('appLogin', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'view/login.html',
		controller: 'loginCtrl'
	});

	$routeProvider.when('/novoUsuario', {
		templateUrl: 'view/novoUsuario.html',
		controller: 'novoUsuarioCtrl'
	});

	$routeProvider.when('/lista', {
		templateUrl: 'view/lista.html',
		controller: 'listaCtrl'
	});

	$routeProvider.when('/cadastroLista', {
		templateUrl: 'view/cadastroLista.html',
		controller: 'cadastroListaCtrl'
	});


	$routeProvider.otherwise({redirectTo: '/'});
	
});

app.service("serviceTask",function(){
	this.task = {nome:"",itens:[],completos:[]};
	this.list = [];
	
});
app.service("serviceLogin", function(){
	this.login = {email:'Inaiane', senha:'nai'};
});
app.service("serviceNovoLogin", function(){
	this.novoLogin = [];
});