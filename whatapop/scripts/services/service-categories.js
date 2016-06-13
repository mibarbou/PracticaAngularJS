angular.module("whatapop").service("CategoryService", function ($http, Properties) {

    this.getCategories = function () {

        return $http(Properties.urlServer + Properties.endpointCategories);
    };

});