angular
    .module("whatapop")
    .value("Properties", {
        urlServer: "http://localhost:8000",
        endpointProducts: "/api/products",
        endpointUsers: "/api/users",
        endpointCategories: "/api/categories"
    });
