angular
    .module("whatapop")
    .component("root", {
        $routeConfig: [{
            name: "Products",
            path: "/products",
            useAsDefault: true,
            component: "products"
        }, {
            name: "ProductDetail",
            path: "/products/:id",
            component: "productDetail"
        }],
        templateUrl: "views/root.html"
    });
