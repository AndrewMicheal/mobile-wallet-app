let RateController = angular.module('starter');

RateController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    RateYourExperience : "Rate your experience",
    Comment : "Comment(Optional)",
    theValueIsToLong : "the value is to long",
    Submit : 'Submit',
    Skip : "Skip"
  });

  $translateProvider.translations('ar', {
    RateYourExperience : "قيم تجربتك",
    Comment : "تعليق(اختيارى)",
    theValueIsToLong : "القيمة طويلة",
    Submit : 'إرسال',
    Skip : "تخطى"
  });
  $translateProvider.preferredLanguage('en');

})


RateController.controller('RateController' , function($scope , $state , $translate,languageService,$rootScope) {

  $scope.curlanguage = $translate.use(languageService.getLanguage());
  $scope.curlanguage = $scope.curlanguage.$$state.value;

  $scope.createLang = languageService.getLanguage();

  let body = document.getElementsByTagName("body")[0];


  if(languageService.getLanguage() == 'ar') {
    body.classList.add("arDirect");
    body.classList.remove("enDirect");
  } else {
    body.classList.remove("arDirect");
    body.classList.add("enDirect");
  }

  $rootScope.$on("getLanguageValue" , function() {
    let t = languageService.getLanguage();
    console.log("t="+t)
    $scope.curlang = t;
  })

  $scope.commentLength = 0;
  $scope.disableBtn = false;

  $scope.getData = function(rate) {
    if(rate.length > 2000) {
      $scope.disableBtn = true;
    }
    else {
      $scope.disableBtn = false;
    }
    $scope.commentLength = rate.length;
  }

  $scope.skip = function() {
    $state.go('Home');
  }

  $scope.submit = function() {
    $state.go('submit')
  }
})
