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
        
    $scope.removerItem = function(indexTask){
       

        $scope.task.itens.splice(indexTask,1);  
    };
    
    $scope.removeTodosItens = function(){

        for(var i=0; i < $scope.indexes.length; i++){

 			$scope.task.itens[$scope.indexes[i]] = "";
   		}
   		console.log($scope.task.itens);



   		while($scope.task.itens.indexOf("") > -1){
   			var idx = $scope.task.itens.indexOf("");
   			console.log(idx);
   			$scope.task.itens.splice(idx,1);



   		}
   		

    };

    $scope.indexes = [];
	console.log($scope.indexes);

    $scope.itensMarcados = function(index){

   		console.log(index);
   		while($scope.indexes.indexOf(index) > -1){
   			console.log(index);
   			$scope.indexes.splice($scope.indexes.indexOf(index),1);
   			return;
   		}

   		$scope.indexes.push(index);
   		console.log($scope.indexes);

   };
});