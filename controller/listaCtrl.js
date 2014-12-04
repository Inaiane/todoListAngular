app.controller('listaCtrl', function($scope, serviceTask){

	
	console.log("listaCtrl");

	$scope.listTasks = serviceTask.list;

	$scope.selecionarLista = function(list){
		serviceTask.task = list;
		window.location.replace("#/cadastroLista");
	}

	$scope.novaLista = function(){
		window.location.replace("#/cadastroLista");
	}

});