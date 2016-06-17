var productDetail = {

    bindings: {
        $router: "<"
    },

    templateUrl: "views/product-detail.html",
    controller: function (ProductService, $sce) {

        var self = this;

        self.$routerOnActivate = function (next) {

            var id = next.params.id;

            console.log("id:" + id);
            ProductService.getProduct(id).then(function (res) {
                
                self.product = res.data;

                self.photoPath = ProductService.getProductPicturePath;

                self.htmlDescription = $sce.trustAsHtml(self.product.description);
            });

        };

    }
};

productDetail.$inject = ["ProductService", "$sce"];
angular.module("whatapop").component("productDetail", productDetail);

