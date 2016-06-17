var categoryFilter = function () {

    return function (products, category) {

        var filteredProducts = [];
        console.log(products);
        console.log(category);
        return filteredProducts;
    };

};

angular.module("whatapop").filter("CategoryFilter", categoryFilter);
