//service returns list of infractions in the home
app.service("lista_infracciones_home_service", function($http){
	this.getRuta = function(){
		var ruta = 'http://diegografico.webuda.com/json/infraccion.php';
		//var ruta = 'js/json/lista_infracciones.json';
		return $http.get(ruta);
	}
	this.getUrl = function(){
		var url = 'tab2/lista_detail_infracciones';
		return url;
	}
});