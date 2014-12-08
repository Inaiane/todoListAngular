app.controller('cadastroListaCtrl', function($scope, serviceTask){
	console.log("cadastroListaCtrl");

	$scope.task = serviceTask.task;
	console.log($scope.task);

	if($scope.task.nome === ""){
		$scope.task.newTask = true;
	}else{
		$scope.task.newTask = false;
	}
	
	$scope.addItem = function(item){
		$scope.task.itens.push({'item':item});
		$scope.item = "";
	}

	$scope.addItemKeyPress = function(e, item){
		if(e.keyCode === 13){
			$scope.task.itens.push({'item':item});
			$scope.item = "";
		}
	}

	$scope.finalizarLista = function(){
		if($scope.task.nome !== "" && $scope.task.newTask){
			serviceTask.list.push($scope.task);
		}
		window.location.replace("#/lista");
	};
        
        $scope.removerItem = function(itemTask){
            var index = $scope.task.itens.indexOf(itemTask);
            $scope.task.itens.splice(index);  
        };
        $scope.removeTodosItens = function(itemTask){
            
            
            var index = serviceTask.list.push(itemTask);
        
            
            console.log(index);
            $scope.task.itens.splice(index);
            //return index;
            
       };
        
   

});