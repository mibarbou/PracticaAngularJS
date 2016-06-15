var boxProduct = function (ProductService) {
   
    return {
        bindings: {
            $router: "<"
        },
        restrict: "EA",
        templateUrl: "views/box-product.html",
        scope: {

            product: "<",
            onClickProduct: "&"
        },
        
        link: function (scope) {

            var self = this;
            
            scope.getPhotoPath  = ProductService.getProductPicturePath;


            scope.onClickProduct = function () {

                self.$router.navigate(["ProductDetail"]);
            };

        }

    };

};

boxProduct.$inject = ["ProductService"];
angular.module("whatapop").directive("boxProduct", boxProduct);
