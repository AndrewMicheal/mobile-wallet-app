let TransterPiController = angular.module('starter');

TransterPiController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    Transfer : "Transfer",
    WalletBalance : "Wallet Balance",
    EnterPINcode : "Enter PIN code" ,
    agree : "Confirm",
    back : "Back",
  });

  $translateProvider.translations('ar', {
    Transfer : "تحويل",
    WalletBalance : "رصيد المحفظة",
    EnterPINcode : "أدخل الرقم السري" ,
    agree : "موافقة",
    back : "رجوع",

  });
})


TransterPiController.controller('TransterPiController' , function($scope , $ionicPopover ,  $rootScope , $state, languageService , $translate) {
  let body = document.getElementsByTagName("body")[0];
  let leftSide = document.getElementById("leftSide");
  let backBtn = document.getElementById("backBtn");
  let lastNumber = document.getElementById("lastNumber");


  $scope.curlanguage = $translate.use(languageService.getLanguage());
  $scope.curlanguageVal = $scope.curlanguage.$$state.value;


  $scope.createLang = languageService.getLanguage();

  $rootScope.$on("getLanguageValue" , function() {
    let t = languageService.getLanguage();
    console.log("t="+t)
    $scope.curlang = t;
  })

  if(languageService.getLanguage() == 'ar') {
    body.classList.add("arDirect");
    body.classList.remove("enDirect");
    leftSide.classList.add("headerPaddingRight");
    leftSide.classList.remove("headerPaddingLeft");
    backBtn.classList.add("back-btn-margin-left");

      lastNumber.classList.add("flexStart");
      lastNumber.classList.remove("flexEnd");

  } else {
    body.classList.remove("arDirect");
    body.classList.add("enDirect");
    leftSide.classList.remove("headerPaddingRight");
    leftSide.classList.add("headerPaddingLeft");
    backBtn.classList.remove("back-btn-margin-left");


    lastNumber.classList.remove("flexStart");
    lastNumber.classList.add("flexEnd");

  }

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

  $scope.buttonsAr = {
    'justify-content':'flex-start',
    'margin-right' : '8px'
  }

  $scope.buttonsEn = {
    'justify-content':'flex-end',
    'margin-right' : '-3px'
  }

  function directionPage(key) {
    if(key == 'ar') {
      body.classList.add("arDirect");
      body.classList.remove("enDirect");
      leftSide.classList.add("headerPaddingRight");
      leftSide.classList.remove("headerPaddingLeft");
      backBtn.classList.add("back-btn-margin-left");
      lastNumber.classList.add("flexStart");
      lastNumber.classList.remove("flexEnd");

    } else {
      body.classList.remove("arDirect");
      body.classList.add("enDirect");
      leftSide.classList.remove("headerPaddingRight");
      leftSide.classList.add("headerPaddingLeft");
      backBtn.classList.remove("back-btn-margin-left");

      lastNumber.classList.remove("flexStart");
      lastNumber.classList.add("flexEnd");

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
    $state.go('Transfer');
  }
})
