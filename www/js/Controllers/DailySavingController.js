let DailySavingController = angular.module('starter');

DailySavingController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    DailySavingTitle: 'Daily Saving',
    transferMoney: 'Transfer Money',
    WalletBalance : "Wallet Balance",
    DailySaving : "Daily Saving",
    ReadMore : "Read More",
    TutorialVideo : "Tutorial Video",
    InterestRate : "Interest rate",
    AccountMaximumSavingBalance : "Account Maximum Saving Balance",
    StampDutyFee : "Stamp duty fee",
    OpeningFee : "Opening fee",
    MaintenanceFee : "Maintenance fee",
    accountParagh : "Your wallet account should have sufficient balance to cover minimum saving account and all relevant fees",
    OpenAccount : "Open Account"
  });

  $translateProvider.translations('ar', {
    DailySavingTitle: 'التوفير اليومي',
    transferMoney: 'تحويل أموال',
    WalletBalance : "رصيد المحفظة",
    DailySaving : "التوفير اليومي",
    ReadMore : "اقرأ أكثر",
    TutorialVideo : "فيديو تعليمي",
    InterestRate : "سعر الفائدة",
    AccountMaximumSavingBalance : "الحد الأقصى لرصيد التوفير في الحساب",
    StampDutyFee : "رسوم",
    OpeningFee : "رسوم فتح الحساب",
    MaintenanceFee : "رسوم الصيانة",
    accountParagh : "يجب أن يحتوي حساب محفظتك على رصيد كافٍ لتغطية الحد الأدنى لحساب التوفير وجميع الرسوم ذات الصلة",
    OpenAccount : "فتح حساب"
  });
})

DailySavingController.controller('DailySavingController',function($scope ,  $state , $translate , languageService , $ionicPopover) {

  $scope.curlang = $translate.use(languageService.getLanguage());


  let body = document.getElementsByTagName("body")[0];
  let HeaderContent = document.getElementById("headerContent");
  let balance = document.getElementById("balance");

  if(languageService.getLanguage() == 'ar') {
    body.classList.add("arDirect");
    body.classList.remove("enDirect");
    HeaderContent.classList.add('vaction-container');
    balance.classList.add('vaction-container');
    balance.classList.add('wallet-balance-content-desc-pr');
    balance.classList.remove('wallet-balance-content-desc-padding-left');
  } else {
    body.classList.remove("arDirect");
    body.classList.add("enDirect");
    HeaderContent.classList.remove('vaction-container');
    balance.classList.remove('vaction-container');
    balance.classList.remove('wallet-balance-content-desc-pr');
    balance.classList.add('wallet-balance-content-desc-padding-left');
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

  console.log($scope.lang);
   $scope.loadMore = function() {
    console.log("complete")
    $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.check = true
  }, 1000;

  $scope.changeLanguage = function (key) {
    languageService.setLanguage(key);
    $translate.use(languageService.getLanguage());
    $scope.closePopover();
    directionPage(key);
  };

  function directionPage(key) {

    let HeaderContent = document.getElementById("headerContent");
    let balance = document.getElementById("balance");

    if(key == 'ar') {
      body.classList.add("arDirect");
      body.classList.remove("enDirect");
      HeaderContent.classList.add('vaction-container');
      balance.classList.add('vaction-container');

    } else {
      body.classList.remove("arDirect");
      body.classList.add("enDirect");
      HeaderContent.classList.remove('vaction-container');
      balance.classList.remove('vaction-container');

    }
  }

  $scope.openAccount = function() {
    $state.go('createDaily');
  }
})
