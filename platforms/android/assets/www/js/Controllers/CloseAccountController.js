let CloseAccountController = angular.module('starter');

CloseAccountController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    CloseAccount : "Close Account",
    WalletBalance : "Wallet Balance",
    NameOfAccount : "Name of account",
    SavingBalance : "Saving Balance",
    WalletAccount : "Wallet Account",
    CancellationReason : "Cancellation reason",
    SelectAReason : "Select a reason",
    DissatisfiedWithService : "Dissatisfied with service",
    FoundABetterInvestmentOpportunity : "Found a better investment opportunity",
    Needthefunds : "Need the funds",
    OtherReason : 'Other reason',
    Back : "Back",
    Next : "Next",
    Confirmation : "Confirmation",
    Areyousureyouwanttodeleteyour : "Are you sure you want to delete your",
    account : "account",
    ok : "Ok",
    cancel  : "Cancel",
    ques : "?"
  });

  $translateProvider.translations('ar', {
    CloseAccount : "إغلاق الحساب",
    WalletBalance : "رصيد المحفظة",
    NameOfAccount : "اسم الحساب",
    SavingBalance : "رصيد التوفير",
    WalletAccount : "حساب المحفظة",
    CancellationReason : "سبب الإلغاء",
    SelectAReason : "اختر سببا",
    DissatisfiedWithService : "غير راض عن الخدمة",
    FoundABetterInvestmentOpportunity : "وجدت فرصة استثمارية أفضل",
    Needthefunds : "تحتاج الأموال",
    OtherReason : 'سبب آخر',
    Back : "رجوع",
    Next : "التالى",
    Confirmation : "تاكيد",
    Areyousureyouwanttodeleteyour : "هل أنت متأكد أنك تريد حذف",
    account : 'حسابك',
    ok : "موافق",
    cancel  : "إلغاء",
    ques : "؟"


  });
})


CloseAccountController.controller('CloseAccountController' , function($scope ,$window , $state , languageService,$translate,$rootScope,$ionicPopover) {
  $scope.getLangVal = languageService.getLanguage();

  $scope.curlangua = $translate.use(languageService.getLanguage());
  $scope.curlanguage = $scope.curlangua.$$state.value;


  $scope.getLang = languageService.getLanguage();




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

  $scope.back = function() {
    $window.history.go(-1);
  }

  $scope.flag = false;

  $scope.closeNext = function() {
    $scope.flag = true;
  }

  $scope.closeCancel = function() {
    $scope.flag = false;
  }
  $scope.dsbl = true;

  $scope.walletEnDir =  {
    position: "absolute",
    left: "-14px"
  }

  $scope.walletArDir =  {
    position: "absolute",
    right: "-14px"
  }

  $scope.getData = function(reason) {
    if(reason !== "") {
      $scope.dsbl = false;
    }
  }

  $scope.ok = function() {
    $state.go('close-account-pin');
  }
})
