'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchMenu = '';
  $scope.message = '';

  $scope.checkTooMuch = function() {

    if ($scope.lunchMenu === undefined || $scope.lunchMenu.trim() === '') {
      $scope.message = 'Please enter data first.';
    } else {
      var food = $scope.lunchMenu.split(',');
      var count = food.length;

      food.forEach(function(item) {
        if (item === undefined || item.trim() === '') --count;
      });

      if (count <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }

    }
  };

}
