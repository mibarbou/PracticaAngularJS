angular.module("whatapop").service("UserService", function ($http, Properties) {

    this.getUsers = function () {

        return $http(Properties.urlServer + Properties.endpointUsers);
    };

});