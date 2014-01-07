/**
* app Module
*
* Description
*/
'use strict';

angular.module('app', ['components'])

.controller('BeerCounter', function($scope, $locale) {
	$scope.beers = [0, 1, 2, 3, 4, 5, 6];
	console.log($locale.id);
	if ($locale.id === 'sk') {
		$scope.beerForms = {
			0: 'žiadne pivo',
	    	one: '{} pivo',
		    few: '{} pivá',
	    	other: '{} pív'
		};
	} else if ($locale.id === 'zh-tw') {
		$scope.beerForms = {
			0: '沒有啤酒',
	    	other: '{} 罐啤酒'
		};
	} else {
		$scope.beerForms = {
			0: 'no beers',
			one: '{} beer',
			other: '{} beers'
		};
	}
});