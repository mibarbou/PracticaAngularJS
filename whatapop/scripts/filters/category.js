var categoryFilter = function () {

    return function (products, cat) {

        if (typeof  cat === 'undefined' || cat === "") {

            return products;
        }

        var category = parseInt(cat);

        if(category === 0) {

            return products;
        }

        var filteredProducts = [];

        for (var i = 0; i < products.length; i++) {

            if(products[i].category.id === category) {

                filteredProducts.push(products[i]);
            }
        }

        return filteredProducts;
    };

};

angular.module("whatapop").filter("CategoryFilter", categoryFilter);
