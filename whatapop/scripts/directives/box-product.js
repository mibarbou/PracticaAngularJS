angular.module("whatapop").directive("boxProduct", function () {
   
    return {
        
        restrict: "EA",
        templateUrl: "views/box-product.html",
        scope: {
          
            onClickProduct: "&"
        },
        
        link: function (scope) {
            
            scope.goToProduct = function () {

                scope.onClickProduct({product: scope.product})
            };
        }
        
    };
    
});
