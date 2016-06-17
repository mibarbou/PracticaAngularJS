var categoryService = function ($http, Properties) {

    this.getCategories = function () {

        return $http.get(Properties.urlServer + Properties.endpointCategories);
    };

};

categoryService.$inject = ["$http", "Properties"];
angular.module("whatapop").service("CategoryService",categoryService);