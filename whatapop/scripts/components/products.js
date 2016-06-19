var products = {

    bindings: {
        $router: "<"
    },

    templateUrl: "views/products.html",
    controller: function (ProductService, CategoryService, LocationService, UserService) {

        var self = this;

        self.$onInit = function () {

            ProductService.getProducts().then(function (res) {

                self.products = res.data;

            });

            CategoryService.getCategories().then(function (res) {

                self.categories = res.data;

            });

            LocationService.getUserLocation().then(function (res) {

                self.currentLocation = res;

            });

            UserService.getUsers().then(function (res) {

                self.users = res.data;
            });

        };

        self.getProductPicturePath = ProductService.getProductPicturePath;

    }
};

products.$inject = ["ProductService", "CategoryService", "LocationService", "UserService"];
angular.module("whatapop").component("products", products);
