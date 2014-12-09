app.controller('cadastroListaCtrl', function($scope, serviceTask){
  $scope.markAll = false;
  $scope.task = serviceTask.task;




if($scope.task.nome === ""){
		$scope.task.newTask = true;
	}else{
		$scope.task.newTask = false;
}  
    
  $scope.addTodo = function(e, item) {
      if(e.keyCode == 13){
          $scope.task.itens.push({'item':item});
          $scope.item = "";
          console.log($scope.task.itens.text);
      }
  };

  $scope.addTodoClick = function(item) {
      
          $scope.task.itens.push({'item':item});
          $scope.item = "";
      
  };

  $scope.isTodo = function(){
      return $scope.task.itens.length > 0;  
  }
  $scope.toggleEditMode = function(){
      $(e.target).closest('li').toggleClass('editing');
  };
  $scope.editOnEnter = function(itemTask){
      if(e.keyCode == 13 && $scope.task.item){
          $scope.toggleEditMode();
      }
  };
    
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.task.itens, function(itemTask) {
      count += itemTask.done ? 0 : 1;
    });
    return count;
  };

  $scope.hasDone = function() {
      return ($scope.task.itens.length != $scope.remaining());
  }    
    
  $scope.itemText = function() {
      return ($scope.task.itens.length - $scope.remaining() > 1) ? "items" : "item";     
  };
      
  $scope.toggleMarkAll = function() {
      angular.forEach($scope.task.itens, function(itemTask) {
        itemTask.done =$scope.markAll;
      });
  };
  
  $scope.clear = function() {
    var oldTodos = $scope.task.itens;
    $scope.task.itens = [];
    angular.forEach(oldTodos, function(itemTask) {
      if (!itemTask.done) $scope.task.itens.push(itemTask);
    });
  };


  $scope.finalizarLista = function(){
  console.log($scope.task);

    if($scope.task.nome !== "" && $scope.task.newTask){
      serviceTask.list.push($scope.task);
      //localStorage.setItem("lista", angular.toJson(serviceTask.list));
    }
    
    console.log();
    window.location.replace("#/lista");
  };
    
});

