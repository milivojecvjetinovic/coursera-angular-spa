'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchMenu = '';
  $scope.message = '';
  $scope.color = 'green';
  $scope.bcolor = '';

  $scope.checkTooMuch = function() {

    if ($scope.lunchMenu === undefined || $scope.lunchMenu.trim() === '') {
      $scope.color = 'red';
      $scope.message = 'Please enter data first.';
      $scope.lunchMenu = '';
    } else {
      var food = $scope.lunchMenu.split(',');
      var count = food.length;

      food.forEach(function(item) {
        if (item === undefined || item.trim() === '') --count;
      });

      if (count === 0) {
        $scope.color = 'red';
        $scope.message = 'Please enter data first.';
        $scope.lunchMenu = '';
      } else {
        $scope.color = 'green';
        if (count <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      }
    }

    $scope.bcolor = $scope.color;
  };
}
