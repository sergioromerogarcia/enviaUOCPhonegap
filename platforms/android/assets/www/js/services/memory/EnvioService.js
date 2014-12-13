var EnvioService = function() {

    this.initialize = function() {
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var envio = null;
        var l = envios.length;
        for (var i=0; i < l; i++) {
            if (envios[i].id === id) {
                envio = envios[i];
                break;
            }
        }
        deferred.resolve(envio);
        return deferred.promise();
    }
    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = envios.filter(function(element) {
            var strbusqueda = element.idUsuario;
            return strbusqueda.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;

        });
        deferred.resolve(results);
        return deferred.promise();
    }
    var envios = [
        {"idEnvio":1111,"direccionEnvio":"Dirección de Envío 1","idUsuario":"1"},
        {"idEnvio":2222,"direccionEnvio":"Dirección de Envío 2","idUsuario":"1"},
        {"idEnvio":3333,"direccionEnvio":"Dirección de Envío 3","idUsuario":"2"},
        {"idEnvio":4444,"direccionEnvio":"Dirección de Envío 4","idUsuario":"2"},
        {"idEnvio":5555,"direccionEnvio":"Dirección de Envío 5","idUsuario":"3"},
        {"idEnvio":6666,"direccionEnvio":"Dirección de Envío 6","idUsuario":"3"},
        {"idEnvio":7777,"direccionEnvio":"Dirección de Envío 7","idUsuario":"4"},
        {"idEnvio":8888,"direccionEnvio":"Dirección de Envío 8","idUsuario":"4"}

    ];

}