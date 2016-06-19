var distanceFilter = function ($haversine) {

    var maxDistance;

    return function (products, users, distance, location) {

        console.log(location);
        console.log(distance);

        if (typeof  location === 'undefined' || typeof distance === 'undefined' || typeof users === 'undefined') {

            return products;
        }

        maxDistance = parseInt(distance);

        var filteredProducts = [];

        /*for (var i = 0; i < products.length; i++) {

            for (var j = 0; j < users.length; i++) {

                if(products[i].seller.id === users[j].id) {

                    var coordinate = {
                        "latitude": users[j].latitude,
                        "longitude": users[j].longitude
                    };

                    if(isReachable(location, coordinate)) {

                        filteredProducts.push(products[i]);
                    }
                }
            }
        }*/

        return products;
    };

    function isReachable(coord1, coord2) {

        var currentDistance = $haversine.distance(coord1, coord2)/1000;

        if(currentDistance <= maxDistance) {

            return true;

        } else {

            return false;
        }

    };

};

distanceFilter.$inject = ["$haversine"];
angular.module("whatapop").filter("DistanceFilter", distanceFilter);
