var productDetail = {

    bindings: {
        $router: "<"
    },

    templateUrl: "views/product-detail.html",
    controller: function (ProductService) {

        var self = this;

        self.$routerOnActivate = function (next) {

            var id = next.params.id;

            console.log("id:" + id);
            ProductService.getProduct(id).then(function (res) {
                
                self.product = res.data;
                
            });

        };

    }
};

productDetail.$inject = ["ProductService"];
angular.module("whatapop").component("productDetail", productDetail);

