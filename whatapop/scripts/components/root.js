angular
    .module("whatapop")
    .component("root", {
        $routeConfig: [{
            name: "Products",
            path: "/products",
            component: "products"
        }, {
            name: "ProductDetail",
            path: "/products/:id",
            component: "productDetail"
        }],
        templateUrl: "views/root.html"
    });
