app.controller('mostrar_detail_controller', ['$scope', '$location', '$stateParams', 'resolveData', 'factoryPlaca',
	function($scope, $location, $stateParams, resolveData, factoryPlaca){
		$scope.detail_lista = factoryPlaca.get_objeto();
	}
]);
