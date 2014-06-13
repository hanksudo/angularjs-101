(function() {
    var app = angular.module('gemStore', []);

    app.controller('PanelController', function() {
        this.tab = 1;

        this.setTab = function(tab) {
            this.tab = tab;
        };

        this.isSet = function(tab) {
            return this.tab === tab;
        };
    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    app.controller('StoreController', function() {
        this.products = gem;
    });

    var gem = [
        {
            name: 'Dodecahedron',
            price: 110.50,
            description: 'In geometry, a dodecahedron (Greek δωδεκάεδρον, from δώδεκα, dōdeka "twelve" + ἕδρα hédra "base", "seat" or "face") is any polyhedron with twelve flat faces, but usually a regular dodecahedron is meant: a Platonic solid.',
            canPurchase: true,
            soldOut: false,
            image: "http://upload.wikimedia.org/wikipedia/commons/e/e0/Dodecahedron.jpg",
            reviews: []
        },
        {
            name: 'Doraemon',
            price: 146.50,
            description: "Doraemon (Japanese: ドラえもん) is a Japanese manga series written and illustrated by Fujiko Fujio, which later became an anime series and an Asian franchise. The series is about a robotic cat named Doraemon, who travels back in time from the 22nd century to aid a pre-teen boy called Nobita Nobi (野比 のび太 Nobi Nobita?).",
            canPurchase: false,
            soldOut: false,
            image: "https://s0.smlycdn.com/data/product2/1/54574442a97edd8c7adcfe7d053136c55e2909d5_m.jpg",
            reviews: [
                {
                    stars: 5,
                    body: "I love this animation.",
                    author: "coolman@coolman.com"
                },
                {
                    stars: 1,
                    body: "This product suck",
                    author: "abc@abc.com"
                }
            ]
        },
        {
            name: 'One Piece',
            price: 299.00,
            description: "One Piece (ワンピース Wan Pīsu?) is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Weekly Shōnen Jump since August 4, 1997;",
            canPurchase: false,
            soldOut: true,
            image: "http://www.siliconera.com/wordpress/wp-content/uploads/2011/12/onepiece2_thumb.jpg",
            reviews: []
        }
    ];
})();
