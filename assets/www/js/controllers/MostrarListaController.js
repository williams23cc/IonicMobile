app.controller('mostrar_lista_controller', ['$scope', '$location', 'resolveData', 'factoryPlaca',
	function($scope, $location, resolveData, factoryPlaca){
		$scope.datos={
				buscar: '',
				original: [],
				lista:[],
				noMoreItemsAvailable: false,
				items: [],
				posicion: 0,
				Tablahash: {'Grave':'img/icontexto-message-types-alert-orange.png', 'Leve':'img/icontexto-message-types-alert-blue.png', 'Muy Grave':'img/icontexto-message-types-alert-red.png'}
		};
		// Get plate to display in the title
		$scope.num_placa = factoryPlaca.get_placa();
		
		resolveData.getRuta().success(function(data, status, headers, config){
			$scope.datos.lista = data;
			$scope.datos.original = data;
		}).error(function(){
			alert('No tiene conexion a Internet');
		});
		
		$scope.funcion=function(_objeto){
			factoryPlaca.set_objeto(_objeto);
			$location.url(resolveData.getUrl());
		};
		
		// scroll infinite
		/*$scope.loadMore=function(){
		    //$scope.items.push({ id: $scope.items.length});
			//alert($scope.datos.lista);
			$scope.datos.items.push($scope.datos.lista[0]);
		    
		    if ( $scope.datos.items.length == $scope.datos.lista.length ) {
		    	$scope.datos.noMoreItemsAvailable = true;
		    }
		    //$scope.datos.posicion++;
		    $scope.$broadcast('scroll.infiniteScrollComplete');
		};*/
		
		// fuzzy algorithm
		$scope.fuzzy=function(tipo){
			if($scope.datos.buscar=='') {
	    		$scope.datos.lista = $scope.datos.original;
	    		return;
	    	}

	    	$scope.datos.lista=[];
	    	for(var i=0;i<$scope.datos.original.length; ++i){
	    		
	    		if($scope.verificar($scope.datos.original[i][tipo].toLowerCase(),$scope.datos.buscar.toLowerCase()))
	    			$scope.datos.lista.push($scope.datos.original[i]);  		
	    	}
		};
		
		$scope.verificar = function(frase,busca){
			var array_busca=busca.split(" ");
			var array_frase=frase.split(" ");
			for(var i=0;i<array_frase.length;++i)
			{
				for(var j=0;j<array_busca.length;++j){
					if($scope.subfuzzy(array_frase[i],array_busca[j])) return true;
				}
			}
			return false;
	  	};
	  	$scope.subfuzzy=  function(pal_o,pal_b){
			var  tam_o=pal_o.length;
			var  tam_b=pal_b.length;
			if(tam_b>tam_o) return false;
			
			for(var i=0,ini_o=0;i<tam_b;++i){
	  			while(ini_o < tam_o && pal_o[ini_o]!=pal_b[i]) ++ini_o;
				if(++ini_o > tam_o) return false;
	  		}
	  		return true;
		}  	
	}
]);