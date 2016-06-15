var categoryService = function ($http, Properties) {

    this.getCategories = function () {

        return $http(Properties.urlServer + Properties.endpointCategories);
    };

};

categoryService.$inject = ["$http", "Properties"];
angular.module("whatapop").service("CategoryService",categoryService);