let TransferNoteController = angular.module('starter');

TransferNoteController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    Transfer : "Transfer",
    WalletBalance : "Wallet Balance",
    From : "From",
    SelectAnAccount : "Select an account",
    To : "To",
    TransferAmount : "Transfer amount",
    Condition : "Condition",
    MinBalance : "Min balance",
    MaxBalance : "Maximum balance",
    MaxWalletBalance : "Max Wallet balance",
    OtherReason : 'Other reason',
    Back : "Back",
    Next : "Next",
    changeLanguage : "Change language" ,
    English : "English" ,
    arabic : "Arabic",
    EnterAnAmount : "Enter an amount",
    Informativenote : "Informative note",
    yes : "Yes",
    Cancel : "Cancel"
  });

  $translateProvider.translations('ar', {
    Transfer : "تحويل",
    WalletBalance : "رصيد المحفظة",
    From : "من",
    SelectAnAccount : "حدد حسابًا",
    To : "إلى",
    TransferAmount : "مبلغ التحويل",
    Condition : "الشروط",
    MinBalance : "الحد الأدنى من الرصيد",
    MaxBalance : "أقصى رصيد",
    MaxWalletBalance : "أقصى رصيد في المحفظة",
    OtherReason : 'سبب آخر',
    Back : "رجوع",
    Next : "التالى",
    changeLanguage : "تغيير اللغة",
    English : "الإنجليزية",
    arabic : "العربية",
    EnterAnAmount : "أدخل مبلغًا",
    Informativenote : "ملاحظة إخبارية",
    yes : "نعم",
    Cancel : "إلغاء"

  });
})

TransferNoteController.controller('TransferNoteController' , function($scope , $window , $state , $stateParams , languageService,$translate,$rootScope,$ionicPopover,$window) {

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

  $scope.next = function() {
    $state.go('TransferCancel',{amount:$stateParams.amount})
  }

  $scope.cancel = function() {
    $window.history.go(-1);
  }
})
