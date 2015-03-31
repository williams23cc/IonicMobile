//service returns list of infractions from a query
app.service("lista_infracciones_service", function($http){
	this.getRuta = function(){
		//var ruta = 'js/json/lista_infracciones.json';
		var ruta = 'http://diegografico.webuda.com/json/infraccion.php';
		return $http.get(ruta);
	}
	this.getUrl = function(){
		var url = 'tab/lista_detail_infracciones';
		return url;
	}
	this.data_base = function(lista) {
		var db = openDatabase('dbtemporal', '1.0', 'Test DB', 2 * 1024 * 1024);
		
		db.transaction(function (tx) {
			for(var i=0;i<lista.length;i++) {
				var codigo = lista[i]['codigo'];
				var infraccion = lista[i]['infraccion'];
				var gravedad = lista[i]['gravedad'];
				var monto = lista[i]['monto'];
				var descuento = lista[i]['descuento'];
				var sancion = lista[i]['sancion'];
				var punto = lista[i]['puntos'];
				var medida = lista[i]['medida'];
				tx.executeSql('INSERT INTO INFRACCION (codigo, infraccion, gravedad, monto, descuento, sancion, puntos, medida) VALUES ("codigo", "infraccion", "gravedad", "monto", "descuento", "sancion", "puntos", "medida")');
			}
			//tx.executeSql('INSERT INTO INFRACCION (codigo, infraccion, gravedad, monto, descuento, sancion, puntos, medida) VALUES (1, "foobar")');
			tx.executeSql('SELECT * FROM INFRACCION', [], function (tx, results) {
				var len = results.rows.length, i;
				alert(len);
			}, null);
		});
	}
});