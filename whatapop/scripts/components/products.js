var products = {

    bindings: {
        $router: "<"
    },

    templateUrl: "views/products.html",
    controller: function (ProductService, CategoryService) {

        var self = this;

        self.$onInit = function () {

            ProductService.getProducts().then(function (res) {

                self.products = res.data;

            });

            CategoryService.getCategories().then(function (res) {

                self.categories = res.data;

            });


        };


        self.getProductPicturePath = ProductService.getProductPicturePath;

    }
};

products.$inject = ["ProductService", "CategoryService"];
angular.module("whatapop").component("products", products);
