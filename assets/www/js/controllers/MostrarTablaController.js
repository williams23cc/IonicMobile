app.controller('HomeCtrl', ['$scope', '$location','resolveData','factoryPlaca', function($scope, $location,resolveData,factoryPlaca){
	$scope.datos = {
		placa : '',
		mensaje : ''
	} ;
	// converts text to uppercase
	$scope.uppercase_placa = function (){
		$scope.datos.placa = $scope.datos.placa.toUpperCase(); 
	};
	// check the access
	$scope.verificar_acceso = function (){
		if($scope.datos.placa!='')
		{
			factoryPlaca.set_placa($scope.datos.placa);
			resolveData.getRuta().
			success(function(data, status, headers, config) {
				if(data.length>0){
					$scope.datos.placa = "";
					$scope.datos.mensaje = "";
					$location.url(resolveData.url);}
				else
					$scope.datos.mensaje = "Placa Invalida!";
			}).error(function(data, status, headers, config) {
				$scope.datos.mensaje = "Problemas de conexion";
			});
		}
		else
			$scope.datos.mensaje = "Campo Vacio";
	}
}]);