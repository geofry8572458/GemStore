(function () {

	var app = angular.module('gemStore', []);

	app.controller('StoreController', function () {
		//		this.product = gem;
		this.products = gems;

	});

	app.controller('GalleryController', function () {
		this.current = 0;

		this.setCurrent = function (newval) {
			this.current = (newval === null) ? 0 : newval;
		};
	});

	app.controller('ReviewController', function () {
		this.review = {};

		this.addReview = function (product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.directive("productTabs", function () {
		return {
			restrict: 'E',
			templateUrl: 'product-tabs.html',
			controller: function () {
				this.tab = 1;
				this.isSet = function (checkTab) {
					return this.tab === checkTab;
				};
				this.setTab = function (setTab) {
					this.tab = setTab;
				};
			},
			controllerAs: 'tabCtrl'
		};
	});

	app.directive("productDescription", function () {
		return {
			restrict: 'E',
			templateUrl: 'product-description.html'
		};
	});

	app.directive("productSpecification", function () {
		return {
			restrict: 'E',
			templateUrl: 'product-specification.html'
		};
	});

	app.directive("productReviews", function () {
		return {
			restrict: 'E',
			templateUrl: 'product-reviews.html'
		};
	});

	var gem = {
		name: 'Azurite',
		price: 2.98,
		soldOut: false,
		canPurchase: true
	};

	var gems = [
		{
			name: 'Diamonds',
			price: 2.95,
			soldOut: false,
			canPurchase: true,
			images: [],
			reviews: [{
					stars: 5,
					body: "I love this gem!",
					author: "joe@example.org",
					createdOn: 1397490980837
		},
				{
					stars: 1,
					body: "This gem sucks.",
					author: "tim@example.org",
					createdOn: 1397490980837
      	}]
	},
		{
			name: 'Azurite',
			price: 2.95,
			soldOut: false,
			canPurchase: true,
			images: ["img/img0.jpg", "img/img1.jpg", "img/img7.jpg"],
			reviews: [{
					stars: 5,
					body: "I love this gem!",
					author: "joe@example.org",
					createdOn: 1397490980837
		},
				{
					stars: 1,
					body: "This gem sucks.",
					author: "tim@example.org",
					createdOn: 1397490980837
      	}]
	},
		{
			name: 'Bloodstone',
			price: 5.95,
			soldOut: false,
			canPurchase: false,
			images: ["img/img2.jpg", "img/img3.jpg"],
			reviews: [{
					stars: 5,
					body: "I love this gem!",
					author: "joe@example.org",
					createdOn: 1397490980837
		},
				{
					stars: 1,
					body: "This gem sucks.",
					author: "tim@example.org",
					createdOn: 1397490980837
      	}]
	},
		{
			name: 'Zircon',
			price: 3.95,
			soldOut: false,
			canPurchase: true,
			images: ["img/img6.jpg"],
			reviews: [{
					stars: 1,
					body: "This gem is WAY too expensive for its rarity value.",
					author: "turtleguyy@example.org",
					createdOn: 1397490980837
		},
				{
					stars: 1,
					body: "BBW: High Shine != High Quality.",
					author: "LouisW407@example.org",
					createdOn: 1397490980837
		},
				{
					stars: 1,
					body: "Don't waste your rubles!",
					author: "nat@example.org",
					createdOn: 1397490980837
      }]
	}
  ];


})();