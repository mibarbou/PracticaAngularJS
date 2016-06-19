var userService = function ($http, Properties) {

    this.getUsers = function () {

        return $http.get(Properties.urlServer + Properties.endpointUsers);
    };

    this.getUser = function (id) {

        return $http.get(Properties.urlServer + Properties.endpointUsers + "/" + id);
    };

};

userService.$inject = ["$http", "Properties"];
angular.module("whatapop").service("UserService",userService);