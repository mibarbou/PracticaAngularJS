var userService = function ($http, Properties) {

    this.getUsers = function () {

        return $http(Properties.urlServer + Properties.endpointUsers);
    };

};

userService.$inject = ["$http", "Properties"];
angular.module("whatapop").service("UserService",userService);