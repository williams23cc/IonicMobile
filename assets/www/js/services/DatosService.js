//service returns data from a query
app.service("datos_service",['$http','factoryPlaca', function($http,factoryPlaca){
	this.url = "tab/datos";
	this.getRuta = function(){
		var ruta="http://diegografico.webuda.com/json/datos.php?placa="+factoryPlaca.get_placa();
		//var ruta = 'js/json/lista_datos.json';
		return $http.get(ruta);
	}
}]);