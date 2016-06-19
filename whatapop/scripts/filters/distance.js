var distanceFilter = function ($haversine) {

    var radio;

    return function (products, sellers, distance, location) {


        if (typeof  location === 'undefined' || typeof distance === 'undefined' || typeof sellers === 'undefined') {

            return products;
        }

        radio = parseInt(distance);

        var nearSellers = sellers.reduce(function(selected, seller) {

            var pos = {"latitude": seller.latitude, "longitude": seller.longitude};

            if ($haversine.distance(pos, location)/1000 < radio) {
                selected.push(seller.id);
            }
            return selected;
        }, []);

        var nearProducts = products.filter(function (product) {

            return nearSellers.indexOf(product.seller.id) > -1;

        });


        return nearProducts;
    };

};

distanceFilter.$inject = ["$haversine"];
angular.module("whatapop").filter("DistanceFilter", distanceFilter);
