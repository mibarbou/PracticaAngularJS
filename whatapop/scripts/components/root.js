angular
    .module("whatapop")
    .component("root", {
        $routeConfig: [{
            name: "Products",
            path: "/products",
            component: "products"
        }, {
            name: "ProductDetail",
            path: "/product-detail",
            component: "productDetail"
        }],
        templateUrl: "views/root.html"
    });
