let DashboardSubmitController = angular.module('starter');

DashboardSubmitController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    savingTitle: 'Saving',
    transferMoney: 'Transfer Money',
    DashBored : 'Dashboard' ,
    transferMoney : 'Transfer Money' ,
    ATMDepositWithdrawal : 'ATM Deposit/Withdrawal',
    BillPayments : "Bill Payments",
    AgentDepositWithdrawal : "Agent Deposit/Withdrawal",
    TransactionHistory : "Transaction History",
    MerchantPurchase : "Merchant Purchase",
    walletBalance : "wallet Balance",
    changeLanguage : "Change language" ,
    English : "English" ,
    arabic : "Arabic",
    Wallet : "Wallet",
    TotalSaving : "Total saving",
    TotalBalance : "Total balance",
    TotalSavingBalance : "Total Saving Balance",
    AggregateBalance : "Aggregate Balance"
  });

  $translateProvider.translations('ar', {
    savingTitle: 'ادخار',
    transferMoney: 'تحويل أموال',
    DashBored : 'لوحة التحكم' ,
    transferMoney : 'تحويل أموال',
    ATMDepositWithdrawal : 'الإيداع / السحب من أجهزة الصراف الآلي',
    BillPayments : "مدفوعات الفواتير",
    AgentDepositWithdrawal : "وكيل إيداع / سحب",
    TransactionHistory : "تاريخ المعاملات",
    MerchantPurchase : "شراء التاجر",
    walletBalance : "رصيد المحفظة",
    changeLanguage : "تغيير اللغة",
    English : "الإنجليزية",
    arabic : "العربية",
    Wallet : "محفظة",
    TotalSaving : "إجمالي التوفير",
    TotalBalance : "إجمالي الرصيد",
    TotalSavingBalance : "إجمالي رصيد التوفير",
    AggregateBalance : "الرصيد الإجمالي"



  });
})


DashboardSubmitController.controller('DashboardSubmitController',function($scope,$translate,languageService,$rootScope,$ionicPopover) {

  $scope.walletFlag = true;
  $scope.totalSavingFlag = false;
  $scope.totalBalanceFlag = false;

  let wallet = document.getElementById("wallet");
  let saving = document.getElementById("saving");
  let balance = document.getElementById("balance");

  let body = document.getElementsByTagName("body")[0];
  let leftSide = document.getElementById("leftSide");



  $scope.curlanguage = $translate.use(languageService.getLanguage());
  $scope.curlanguageVal = $scope.curlanguage.$$state.value;


  $scope.createLang = languageService.getLanguage();

  if(languageService.getLanguage() == 'ar') {
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

   $scope.loadMore = function() {
    console.log("complete")
    $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.check = true
  }, 1000;

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

  $scope.walletActive = function() {
    $scope.walletFlag = true;
    $scope.totalSavingFlag = false;
    $scope.totalBalanceFlag = false;

    wallet.classList.add("header-active");
    saving.classList.remove("header-active");
    balance.classList.remove("header-active");
  }

  $scope.totalSavingActive = function() {
    $scope.walletFlag = false;
    $scope.totalSavingFlag = true;
    $scope.totalBalanceFlag = false;

    wallet.classList.remove("header-active");
    saving.classList.add("header-active");
    balance.classList.remove("header-active");
  }

  $scope.totalBalanceActive = function() {
    $scope.walletFlag = false;
    $scope.totalSavingFlag = false;
    $scope.totalBalanceFlag = true;

    wallet.classList.remove("header-active");
    saving.classList.remove("header-active");
    balance.classList.add("header-active");
  }
})
