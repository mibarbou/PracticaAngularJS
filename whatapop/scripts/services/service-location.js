var locationService = function ($q) {

       this.getUserLocation = function() {

           var deferred = $q.defer();

            // Preguntamos si la API está soportada.
            if (navigator.geolocation) {

                // Solicitamos la posición.
                navigator.geolocation.getCurrentPosition(

                    // En caso de obtener la posición.
                    function(data) {

                        deferred.resolve({
                            "latitude": data.coords.latitude,
                            "longitude": data.coords.longitude
                        });

                    },

                    // El usuario no autorizó la petición de posición.
                    function() {
                        deferred.reject(null);
                    }
                );
            }
            // En caso de no estar soportada.
            else {
                deferred.reject(null);
            }

           return deferred.promise;

        }

};

locationService.$inject = ["$q"];
angular.module("whatapop").service("LocationService",locationService);
