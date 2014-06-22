(function() {
    var app = angular.module('store-products', [ ]);

    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html',
            link: function (scope, iElement, iAttrs) {

            }
        };
    });

    app.directive('productPanels', [function () {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function() {
                this.tab = 1;

                this.setTab = function(tab) {
                    this.tab = tab;
                };

                this.isSet = function(tab) {
                    return this.tab === tab;
                };
            },
            controllerAs: 'panel'
        };
    }]);

    app.directive('productGallery', [function () {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html'
        };
    }]);
})();
