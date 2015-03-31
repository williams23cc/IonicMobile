app.factory('factoryPlaca', function(){
    var parametro='';
    var lista=[];
    var objeto;
    var placa='';
    return {
        get_parametro: function(){
            return parametro;
        },
        set_parametro: function(_url){
            parametro=_url;
        },
        get_lista: function(){
            return lista;
        },
        set_lista: function(_lista){
            lista=_lista;
        },
        get_objeto: function(){
        	return objeto;  
        },
        set_objeto: function(_objeto){
        	objeto=_objeto;
        },
        get_placa: function(){
            return placa;
        },
        set_placa: function(_placa){
            placa =_placa;
        }
    };
});