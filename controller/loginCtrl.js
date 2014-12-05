app.controller('loginCtrl', function($scope,serviceLogin){

	
	$scope.login = serviceLogin.login;
	

	$scope.logar = function(email, senha){

		console.log(this.email);
		console.log(this.senha);
		console.log($scope.login.email);


		if(this.email === $scope.login.email && this.senha === $scope.login.senha){

			window.location.replace("#/lista");
		}
		else{
			console.log("Nome ou senha inválidos!");
		}
	}
});