app.controller('cadastroListaCtrl', function($scope, serviceTask){
	console.log("cadastroListaCtrl");

	$scope.task = serviceTask.task;
	
});