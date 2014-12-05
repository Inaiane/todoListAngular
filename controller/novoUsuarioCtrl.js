app.controller('novoUsuarioCtrl', function($scope, serviceNovoLogin){


	$scope.login = serviceNovoLogin.novoLogin;
	

	$scope.novoLogin = function(nome, email, senha){
		$scope.login.push({'nome':nome,'email':email, 'senha':senha});
		console.log($scope.login);
		window.location.replace("#/lista");
	};
});