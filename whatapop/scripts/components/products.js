angular.module("whatapop").component("products", {

    bindings: {
        $router: "<"
    },

    templateUrl: "views/products.html",
    controller: function (ProductService) {

        var self = this;

        self.$onInit = function () {

            ProductService.getProducts().then(function (res) {

                self.products = res.data;

            });
        };
        
        self.getProductPicturePath = ProductService.getProductPicturePath;

    }
});
