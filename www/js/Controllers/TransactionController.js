let TransactionController = angular.module('starter');

TransactionController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    Transactions : "Transactions",
    WalletBalance : "Wallet Balance",
    IncomingTransactions : "Incoming Transactions",
    MoneyTransfer : "Money Transfer",
    TransactionID : "Transaction ID",
    February : "February",
    April : "April",
    OutgoingTransactions : "Outgoing Transactions",
    MaintenanceFee : "Maintenance Fee",
    DailyInterest : 'Daily Interest',
    Back : "Back"
  });

  $translateProvider.translations('ar', {
    Transactions : "المعاملات",
    WalletBalance : "رصيد المحفظة",
    IncomingTransactions : "المعاملات الواردة",
    MoneyTransfer : "تحويل الأموال",
    TransactionID : "رقم المعاملة",
    February : "فبراير",
    April : "أبريل",
    MaintenanceFee : "رسوم الصيانة",
    DailyInterest : 'الفائدة اليومية',
    Back : "رجوع"

  });
})


TransactionController.controller('TransactionController' , function($scope ,$window , languageService,$translate,$rootScope,$ionicPopover) {

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
})
