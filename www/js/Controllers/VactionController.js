let VacationController = angular.module('starter');

VacationController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    WalletBalance : "Wallet Balance",
    SavingBalance : "Saving Balance",
    PlanDetails : "Plan details",
    DailyInterestRate : "Daily interest rate",
    MaintenanceFee : "Maintenance fee",
    CreatedOn : "Created on",
    April : "April",
    NameOfAccount : "Name of account",
    Edit : "Edit",
    Conditions : 'Conditions',
    MinimalBalance : "Minimal balance",
    MaximumBalance : "Maximum Balance",
    CloseAccount : "Close account",
    Transactions : "Transactions",
    Transfer : "Transfer",
  });

  $translateProvider.translations('ar', {
    WalletBalance : "رصيد المحفظة",
    SavingBalance : "رصيد التوفير",
    PlanDetails : "تفاصيل",
    DailyInterestRate : "سعر الفائدة اليومية",
    MaintenanceFee : "رسوم الصيانة",
    CreatedOn : "تم إنشاؤه",
    April : "أبريل",
    NameOfAccount : "اسم الحساب",
    Edit : "تعديل",
    Conditions : 'الشروط',
    MinimalBalance : "حد أدنى من الرصيد",
    MaximumBalance : "الحد الأقصى",
    CloseAccount : "إغلاق الحساب",
    Transactions : "المعاملات",
    Transfer : "تحويل",


  });
})

VacationController.controller('VacationController',function($scope , $state,languageService,$translate,$ionicPopover,$rootScope) {

  languageService.setLanguage('en');

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

  $scope.goToTransaction = function() {
    $state.go('transaction');
  }

  $scope.goToCloseAccount = function() {
    $state.go('close-account');
  }

  $scope.transfer = function() {
    $state.go('Transfer');
  }
})
