//service returns list of ballot from a query
app.service("lista_papeletas_service",['$http','factoryPlaca', function($http,factoryPlaca){
	this.url = "tab/lista_papeletas";
	this.getRuta = function(){
		var ruta='http://diegografico.webuda.com/json/papeleta.php?placa='+factoryPlaca.get_placa();
		//var ruta = 'js/json/lista_papeletas.json';
		return $http.get(ruta);
	}
	this.getUrl = function(){
		var url = 'tab/lista_detail_papeletas';
		return url;
	}
}]);