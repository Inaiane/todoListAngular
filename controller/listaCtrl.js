app.controller('listaCtrl', function($scope, serviceTask,serviceLogin){

	
	console.log("listaCtrl");

	$scope.listTasks = serviceTask.list;
	serviceTask.task = {nome:"",itens:[],completos:[]};

	$scope.selecionarLista = function(list){
		serviceTask.task = list;
		window.location.replace("#/cadastroLista");
	}

	$scope.novaLista = function(){
		window.location.replace("#/cadastroLista");
	}



});