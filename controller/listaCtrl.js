app.controller('listaCtrl', function($scope, serviceTask,serviceLogin){

	
	console.log("listaCtrl");
	console.log(serviceTask.list);

	$scope.listTasks = serviceTask.list;
	//$scope.listTasks = angular.fromJson(localStorage.getItem("lista"));
	serviceTask.task = {nome:"",itens:[],completos:[]};

	$scope.selecionarLista = function(list){
		serviceTask.task = list;
		window.location.replace("#/cadastroLista");
	}

	$scope.novaLista = function(){
		window.location.replace("#/cadastroLista");
	}

	console.log($scope.task);
});