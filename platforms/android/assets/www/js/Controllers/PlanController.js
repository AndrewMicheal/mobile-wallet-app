let PlanController = angular.module('starter');

PlanController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    CreateDailySavings: 'Create Daily Savings',
    walletBalance : "wallet Balance",
    PlanOverview : "Plan overview",
    NameOfAccount : "Name of account",
    DepositAmount : 'Deposit Account',
    MandatoryInitalDeposit : "Mandatory inital deposit" ,
    MaximumAccount : "Maximum account" ,
    IntersetRate : "Interset rate",
    OpeningFee : "Opening fee",
    MaintenanceFee : "Maintenance fee",
    Stampduty : "Stamp duty fee",
    confirm : "Confirm",
    back : "Back",
  });

  $translateProvider.translations('ar', {
    CreateDailySavings: 'انشاء المدخرات اليومية',
    walletBalance : "رصيد المحفظة",
    DepositAmount : 'حساب إيداع',
    PlanOverview : "نظرة عامة",
    NameOfAccount : "اسم الحساب",
    TheValueIsTooLong : 'القيمة طويلة جدًا' ,
    WalletAccount : "حساب المحفظة",
    Conditions : "شروط",
    MandatoryInitalDeposit : "الإيداع الأولي الإلزامي",
    MaximumAccount : "الحد الأقصى للحساب",
    IntersetRate : "سعر الفائدة",
    OpeningFee : "رسوم الفتح",
    MaintenanceFee : "رسوم الصيانة" ,
    Stampduty : "رسوم الضريبة",
    confirm : "تاكيد" ,
    back : "الرجوع"

  });
  $translateProvider.preferredLanguage('en');
})



PlanController.controller('PlanController',function($scope , $window , $state , $rootScope ,$state , $translate , $ionicPopover , languageService) {

  let body = document.getElementsByTagName("body")[0];
  let leftSide = document.getElementById("leftSide");
  let backBtn = document.getElementById("backBtn");

  $scope.curlanguage = $translate.use(languageService.getLanguage());
  $scope.curlanguageVal = $scope.curlanguage.$$state.value;


  $scope.createLang = languageService.getLanguage();

  if(languageService.getLanguage() == 'ar') {
    body.classList.add("arDirect");
    body.classList.remove("enDirect");
    leftSide.classList.add("headerPaddingRight");
    leftSide.classList.remove("headerPaddingLeft");
    backBtn.classList.add("back-btn-margin-left");
  } else {
    body.classList.remove("arDirect");
    body.classList.add("enDirect");
    leftSide.classList.remove("headerPaddingRight");
    leftSide.classList.add("headerPaddingLeft");
    backBtn.classList.remove("back-btn-margin-left");

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
      backBtn.classList.add("back-btn-margin-left");
    } else {
      body.classList.remove("arDirect");
      body.classList.add("enDirect");
      leftSide.classList.remove("headerPaddingRight");
      leftSide.classList.add("headerPaddingLeft");
      backBtn.classList.remove("back-btn-margin-left");
    }

  }

  $scope.changeLanguage = function (key) {
    languageService.setLanguage(key);
    $translate.use(languageService.getLanguage());
    $scope.closePopover();
    directionPage(key);
  };

  $scope.confirm = function() {
    $state.go('terms');
  }

  $scope.back = function() {
    $window.history.go(-1);
  }
})
