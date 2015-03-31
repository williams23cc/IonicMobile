//service returns list of permissions from a query
app.service('lista_permisos_service', ['$http', 'factoryPlaca',
	function($http, factoryPlaca){
		this.getRuta = function(){
			var ruta='http://diegografico.webuda.com/json/permiso.php?placa='+factoryPlaca.get_placa();
			//var ruta = 'js/json/lista_permisos.json';
			return $http.get(ruta);
		}
		this.getUrl = function(){
			var url = 'tab/lista_detail_permisos';
			return url;
		}
	}
]);