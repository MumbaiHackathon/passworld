$(document).ready(function(){
angular.module('myApp', []).controller('myCtrl', function($scope){
  

$scope.colors = ["purple", "red", "yellow", "blue", "orange", "pink"];

$scope.flavorDict1 = ["path", "rabbit", "dress", "page", "replied", "bus", "product", "sky", "wonder" ]; 
$scope.flavorDict2 = ["river", "river", "chapter", "respect", "medicine", "outside", "available", "replace", "life" ]; 
$scope.flavorDict3 = ["car", "orbit", "region", "wing", "section", "short", "money", "suppose", "lonely" ]; 
$scope.flavorDict4 = ["swim", "substance", "fill", "black", "use", "pet", "high", "strong", "national" ]; 
$scope.flavorDict5 = ["until", "second", "motion", "hair", "purple", "charge", "represent", "enjoy", "more" ]; 
$scope.flavorDict6 = ["single", "shall", "musical", "dirt", "speech", "gentle", "plastic", "affect", "break" ]; 

var total;
var lock = new PatternLock('#patternHolder',{
	allowRepeat: false,
	// delimiter: "",
    mapper: function(wordID){
    	if ("undefined" !== typeof $scope.flavorDict1[(wordID)]){
        	total=$scope.flavorDict1[(wordID)];
        	console.log(total);
    }
    
    total = "";
    }

});
});
});







