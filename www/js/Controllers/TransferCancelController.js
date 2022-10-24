let TransferCancelController = angular.module('starter');

TransferCancelController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    Transfer : "Transfer",
    WalletBalance : "Wallet Balance",
    From : "From",
    WalletAccount : "Wallet account",
    SelectAnAccount : "Select an account",
    To : "To",
    TransferAmount : "Transfer amount",
    Source : "Source",
    Condition : "Condition",
    MinDailySavingsBalance : "Min Daily Savings balance",
    MaxDailySavingsBalance : "Max Daily Savings balance",
    MaxWalletBalance : "Max Wallet balance",
    OtherReason : 'Other reason',
    Back : "Back",
    Next : "Next",
    changeLanguage : "Change language" ,
    English : "English" ,
    arabic : "Arabic",
    EnterAnAmount : "Enter an amount",
    Destination : "Destination",
    DailySaving : "Daily Saving",
    CancellationReason : "Cancellation reason",
    SelectAReason : "Select a reason",
    Confirm : "Confirm"
  });

  $translateProvider.translations('ar', {
    Transfer : "تحويل",
    WalletBalance : "رصيد المحفظة",
    Source : "المصدر",
    From : "من",
    WalletAccount : "حساب المحفظة",
    SelectAnAccount : "حدد حسابًا",
    To : "إلى",
    TransferAmount : "مبلغ التحويل",
    Condition : "الشروط",
    MinDailySavingsBalance : "الحد الأدنى لرصيد التوفير اليومي",
    MaxDailySavingsBalance : "الحد الأقصى لرصيد التوفير اليومي",
    MaxWalletBalance : "أقصى رصيد في المحفظة",
    OtherReason : 'سبب آخر',
    Back : "رجوع",
    Next : "التالى",
    changeLanguage : "تغيير اللغة",
    English : "الإنجليزية",
    arabic : "العربية",
    EnterAnAmount : "أدخل مبلغًا",
    Destination : "الوجهة",
    DailySaving : "التوفير اليومي",
    CancellationReason : "سبب الإلغاء",
    SelectAReason : "اختر السبب",
    Confirm : "تأكيد"
  });
})


TransferCancelController.controller('TransferCancelController' , function($scope , $stateParams , $state , languageService,$translate,$rootScope,$ionicPopover) {
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

  $scope.langEn = {
    left : "-15px"
  }
  $scope.langAr = {
    right : "-15px"
  }

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



  $scope.amount = $stateParams.amount;

  $scope.confirm = function() {
    $state.go('TransferPin')
  }

  $scope.back = function() {
    $state.go('Transfer')
  }
})
