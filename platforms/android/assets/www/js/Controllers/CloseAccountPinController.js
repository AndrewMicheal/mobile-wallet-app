let CloseAccountPinController = angular.module('starter');

CloseAccountPinController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    CloseAccount : "Close Account",
    WalletBalance : "Wallet Balance",
    EnterPinCode : "Enter PIN code",
    Back : "Back",
    Confirm : "Confirm",
  });

  $translateProvider.translations('ar', {
    CloseAccount : "إغلاق الحساب",
    WalletBalance : "رصيد المحفظة",
    EnterPinCode : "أدخل الرقم السري",
    Back : "رجوع",
    Confirm : "تاكيد",

  });
})


PinCodeController.controller('CloseAccountPinController',function($scope , $state , $window, languageService,$translate,$rootScope,$ionicPopover) {

  $scope.getLangVal = languageService.getLanguage();

  $scope.curlangua = $translate.use(languageService.getLanguage());
  $scope.curlanguage = $scope.curlangua.$$state.value;


  $scope.getLang = languageService.getLanguage();
  $scope.buttonsAr = {
    'justify-content':'flex-start',
    'margin-right' : '8px'
  }

  $scope.buttonsEn = {
    'justify-content':'flex-end',
    'margin-right' : '8px'
  }




  let body = document.getElementsByTagName("body")[0];
  let leftSide = document.getElementById("leftSide");




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

  var template = '<ion-popover-view><ion-header-bar> <span class="title">Change language</span> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };

  function directionPage(key) {
    if(key == 'ar') {
      body.classList.add("arDirect");
      body.classList.remove("enDirect");
      leftSide.classList.add("headerPaddingRight");
      leftSide.classList.remove("headerPaddingLeft");
    } else {
      body.classList.remove("arDirect");
      body.classList.add("enDirect");
      leftSide.classList.remove("headerPaddingRight");
      leftSide.classList.add("headerPaddingLeft");
    }

  }

  $scope.changeLanguage = function (key) {
    languageService.setLanguage(key);
    $translate.use(languageService.getLanguage());
    $scope.closePopover();
    directionPage(key);
  };

   $scope.loadMore = function() {
    console.log("complete")
    $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.check = true
  }, 1000;

  $scope.confirm = function() {
    $state.go('close-account-home');
  }

  $scope.back = function() {
    $window.history.go(-1);
  }
})
