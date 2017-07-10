  (function (){
'use strict';
angular.module('myFirstApp',[])

.controller('MyFirstController', function($scope) {

$scope.name="";
$scope.totalValue=0;
$scope.displayedVal = function() {
  var total= calculate($scope.name);
  $scope.totalValue=total;
};
function calculate (string) {
  var stringVal=0;
  for(var i=0;i<string.length;i++)
  {
      stringVal+=string.charCodeAt(i);
  }
  return stringVal;
};


})

})();
