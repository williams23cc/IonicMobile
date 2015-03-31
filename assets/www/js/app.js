// structure of app
var app = angular.module('InfoVehicularApp', ['ionic'])

/*.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})*/

.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('tab', {
		url: "/tab",
		abstract: true,
		templateUrl: 'templates/tabs.html'
	})
	
  // ---- papeletas -----
	.state('tab.lista_papeletas', {
		cache: false,
		url: '/lista_papeletas',
		views: {
			'tab-papeletas': {
				templateUrl: 'templates/tab-lista_papeletas.html',
				resolve: {resolveData: 'lista_papeletas_service'},
				controller: 'mostrar_lista_controller'
			}
		}
	})
	.state('tab.lista_detail_papeletas', {
		url: '/lista_detail_papeletas',
		views: {	
			'tab-papeletas': {
				templateUrl: 'templates/papeleta_detail.html',
				resolve: {resolveData: 'lista_papeletas_service'},
				controller: 'mostrar_detail_controller'
			}
		}
	})
	
  // ---- permisos -----	
	.state('tab.lista_permisos', {
		cache: false,
		url: '/lista_permisos',
		views: {
			'tab-permisos': {
				templateUrl: 'templates/tab-lista_permisos.html',
				resolve: {resolveData: 'lista_permisos_service'},
				controller: 'mostrar_lista_controller'
			}
		}
	})
	.state('tab.detalle_permisos', {
		url: '/lista_detail_permisos',
		views: {
			'tab-permisos': {
				templateUrl: 'templates/permiso_detail.html',
				resolve: {resolveData: 'lista_permisos_service'},
				controller: 'mostrar_detail_controller'
			}
		}
	})
	// ------ datos --------
	.state('tab.datos', {
		cache: false,
		url: '/datos',
		views: {
			'tab-datos': {
				templateUrl: 'templates/tab-datos.html',
				resolve: {resolveData: 'datos_service'},
				controller: 'mostrar_lista_controller'
			}
		}
	})
	// ----- infracciones -------
	.state('tab.lista_infracciones', {
		url: '/lista_infracciones', 
		views: {
			'tab-infracciones': {
				templateUrl: 'templates/tab-lista_infracciones.html',
				resolve: {resolveData: 'lista_infracciones_service'},
				controller: 'mostrar_lista_controller'
			}
		}
	})
	.state('tab.lista_detail_infracciones', {
		url: '/lista_detail_infracciones',
		views: {
			'tab-infracciones': {
				templateUrl: 'templates/infraccion_detail.html',
				resolve: {resolveData: 'lista_infracciones_service'},
				controller: 'mostrar_detail_controller'
			}
		}
	})
	
	.state('tab2', {
		url: "/tab2",
		abstract: true,
		templateUrl: 'templates/tabs2.html'
	})
	
  // ---- papeletas -----
	.state('tab2.home', {
		url: '/home',
		views: {
			'tab-home': {
				templateUrl: 'templates/home.html',
				resolve: {resolveData: 'datos_service'},
				controller: 'HomeCtrl'
			}
		}
	})
	.state('tab2.lista_infracciones', {
		url: '/lista_infracciones', 
		views: {
			'tab-infracciones': {
				templateUrl: 'templates/tab-lista_infracciones.html',
				resolve: {resolveData: 'lista_infracciones_home_service'},
				controller: 'mostrar_lista_controller'
			}
		}
	})
	.state('tab2.lista_detail_infracciones', {
		url: '/lista_detail_infracciones',
		views: {
			'tab-infracciones': {
				templateUrl: 'templates/infraccion_detail.html',
				resolve: {resolveData: 'lista_infracciones_home_service'},
				controller: 'mostrar_detail_controller'
			}
		}
	}),
	
	
	$urlRouterProvider.otherwise('/tab2/home');
});

app.filter("tam_max", function(){
    return function(text,max){
        if(text != null){
            if(text.length > max){
                return text.substring(0,max) + "...";
            }
        }
    }
})