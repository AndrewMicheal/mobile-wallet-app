let TermsController = angular.module('starter');


TermsController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    TermsAndConditions : "Terms & conditions",
    AcceptTerms : "Accept terms & conditions",
    agree : "Confirm",
    back : "Back",
  });

  $translateProvider.translations('ar', {
    TermsAndConditions : "الشروط",
    AcceptTerms : "قبول الشروط",
    agree : "موافقة",
    back : "رجوع",

  });
  $translateProvider.preferredLanguage('en');
})

TermsController.controller('TermsController',function($scope , $window , $state , languageService ,$rootScope ,  $translate) {
  $scope.dsblBtn = true;

  let body = document.getElementsByTagName("body")[0];
  let backBtn = document.getElementById("backBtn");
  $scope.curlanguage = $translate.use(languageService.getLanguage());

  $scope.lang = languageService.getLanguage();

  $scope.curlanguage = $scope.curlanguage.$$state.value;

  $rootScope.$on("getLanguageValue" , function() {
    let t = languageService.getLanguage();
    console.log("t="+t)
    $scope.curlang = t;
  })


  if(languageService.getLanguage() == 'ar') {
    body.classList.add("arDirect");
    body.classList.remove("enDirect");

    backBtn.classList.add("back-btn-margin-left");
  } else {
    body.classList.remove("arDirect");
    body.classList.add("enDirect");
  
    backBtn.classList.remove("back-btn-margin-left");

  }

  $rootScope.$on("getLanguageValue" , function() {
    let t = languageService.getLanguage();
    console.log("t="+t)
    $scope.curlang = t;
  })



  $scope.accept = function(agree) {
    !agree ? $scope.dsblBtn = true : $scope.dsblBtn = false;
  }
  $scope.loadMore = function() {
    console.log("complete")
    $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.check = true
  }, 1000;

  $scope.agreeConditions = function() {
    $state.go('pin')
  }
  $scope.back = function() {
    $window.history.go(-1);
  }
})

