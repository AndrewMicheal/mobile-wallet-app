let SoftwareGroupHomeController = angular.module('starter');

SoftwareGroupHomeController.controller('SoftwareGroupHomeController' , function($scope , $state) {
  $scope.goToDailySavingAccountPage= function() {
    $state.go('Home');
  }

  $scope.goToOverviewPage = function() {
    $state.go('vacation');
  }
})
