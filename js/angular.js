(function(){
	
	var gem = { name: 'Azurite', price: 2.98 };
	
	var app = angular.module('gemStore', []);
	
	app.controller('StoreController', function(){
		this.product = gem;
		
	});
})();