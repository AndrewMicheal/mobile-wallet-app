let CloseAccountHomeModelController= angular.module('starter');

CloseAccountHomeModelController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    closeAccount: 'close Account',
    transferMoney: 'Transfer Money',
    DashBored : 'Dashboard' ,
    transferMoney : 'Transfer Money' ,
    Saving : "Saving",
    ATMDepositWithdrawal : 'ATM Deposit/Withdrawal',
    BillPayments : "Bill Payments",
    AgentDepositWithdrawal : "Agent Deposit/Withdrawal",
    TransactionHistory : "Transaction History",
    MerchantPurchase : "Merchant Purchase",
    walletBalance : "wallet Balance",
    changeLanguage : "Change language" ,
    English : "English" ,
    arabic : "Arabic",
    YourAccountIsClosed : "Your account is closed",
    OK : "OK"
  });

  $translateProvider.translations('ar', {
    closeAccount: 'إغلاق الحساب',
    transferMoney: 'تحويل أموال',
    DashBored : 'لوحة التحكم' ,
    transferMoney : 'تحويل أموال',
    Saving : "توفير",
    ATMDepositWithdrawal : 'الإيداع / السحب من أجهزة الصراف الآلي',
    BillPayments : "مدفوعات الفواتير",
    AgentDepositWithdrawal : "وكيل إيداع / سحب",
    TransactionHistory : "تاريخ المعاملات",
    MerchantPurchase : "شراء التاجر",
    walletBalance : "رصيد المحفظة",
    changeLanguage : "تغيير اللغة",
    English : "الإنجليزية",
    arabic : "العربية",
    YourAccountIsClosed : "تم إغلاق حسابك",
    OK : "موافق"
  });
})

CloseAccountHomeModelController.controller('CloseAccountHomeModelController' , function($scope , $state, languageService,$translate,$rootScope,$ionicPopover) {
  $scope.curlang = $translate.use(languageService.getLanguage());

  let body = document.getElementsByTagName("body")[0];
  let ele = document.getElementsByClassName("my-arrow-icon");
  let listItemContent = document.getElementsByClassName("list-item-content");

  let balanceLeft = document.getElementById("balance-left");

  for(let i = 0; i < ele.length;i++) {
    if(languageService.getLanguage() === 'ar') {
      ele[i].classList.add("pl-2")
      ele[i].classList.remove("pr-2");
      listItemContent[i].classList.remove("pl-1")
    } else {
      ele[i].classList.remove("pl-2")
      ele[i].classList.add("pr-2");
      listItemContent[i].classList.add("pl-1")

    }
  }


  if(languageService.getLanguage() == 'ar') {
    body.classList.add("arDirect");
    body.classList.remove("enDirect");
  } else {
    body.classList.remove("arDirect");
    body.classList.add("enDirect");
  }

  console.log($scope.curlang)

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

    let HeaderContent = document.getElementById("headerContent");
    let balance = document.getElementById("balance");



    if(key == 'ar') {
      body.classList.add("arDirect");
      body.classList.remove("enDirect");
      HeaderContent.classList.add('vaction-container');
      balance.classList.add('vaction-container');
      balanceLeft.classList.add("padding-balance");
      for(let i = 0; i < ele.length;i++) {

          ele[i].classList.add("pl-2")
          ele[i].classList.remove("pr-2");
          listItemContent[i].classList.remove("pl-1")

      }

    } else {
      body.classList.remove("arDirect");
      body.classList.add("enDirect");
      HeaderContent.classList.remove('vaction-container');
      balance.classList.remove('vaction-container');

      for(let i = 0; i < ele.length;i++) {

        ele[i].classList.remove("pl-2")
        ele[i].classList.add("pr-2");
        listItemContent[i].classList.add("pl-1")

    }
    }

  }



  $scope.changeLanguage = function (key) {
    languageService.setLanguage(key);
    $translate.use(languageService.getLanguage());
    $scope.closePopover();
    directionPage(key);
  };



  directionPage(languageService.getLanguage());

  $rootScope.$on("getLanguageValue" , function() {
    $scope.langDaily = languageService.getLanguage();
  })

  $scope.loadMore = function() {
    console.log("complete")
    $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.check = true
  }, 1000;

  $scope.isTrue = true;

  $scope.ok = function() {
    $scope.isTrue = false;
  }

  $scope.saving = function() {
    $state.go('Daily')
  }
})
