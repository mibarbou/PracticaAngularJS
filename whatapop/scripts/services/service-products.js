angular.module("whatapop").service("ProductService", function ($http, Properties) {
   
    this.getProducts = function () {
      
        return $http.get(Properties.urlServer + Properties.endpointProducts);
    };


    this.getProduct = function (id) {

        return $http.get(Properties.urlServer + Properties.endpointProducts + "/" + id);
    };

    this.getProductPicturePath = function (relativePath) {

        return relativePath ? (Properties.urlServer + "/" + relativePath) : undefined;
    };
    
});
