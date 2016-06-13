angular.module("whatapop").directive("boxProduct", function (ProductService) {
   
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
            
            scope.getPhotoPath  = ProductService.getProductPicturePath;


            scope.onClickProduct = function () {
                
                scope.$router.navigate(["ProductDetail"]);
            };

        }

    };


    
});
