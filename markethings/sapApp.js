var sapApp = angular.module ('SAPapp', ['ngRoute']);
console.log('worked')

sapApp.config(function($routeProvider){

	$routeProvider
		.when("/", {
			templateUrl: "main.html", controller: "mainctrl"
		})
		.when("/newproject", {templateUrl: "newproject.html", controller: "newprojectctrl"})
		.when("/complain", {templateUrl: "anjingkomplen.html", controller: "complainctrl"})
		.when("/poconfirmation", {templateUrl: "PoConfirmation.html", controller: "PoConfirmationctrl"});

});

sapApp.controller('SAPappctrl', function(){	

});

sapApp.controller('mainctrl', function(){


});

sapApp.controller('newprojectctrl', function(){


});

sapApp.controller('complainctrl', function(){


});


sapApp.controller('PoConfirmationctrl', function(){

});