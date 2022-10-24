let CreateDailySavingController = angular.module('starter');


CreateDailySavingController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    CreateDailySavings: 'Create Daily Savings',
    walletBalance : "wallet Balance",
    NameOfAccount: 'Name of Account',
    TheValueIsTooLong : 'The value is too long' ,
    DepositAccount : 'Deposit Account',
    MinimumAmount: "Minimum amount is EGP 100(maintenance fee)",
    Source : "Source",
    Conditions : "Conditions",
    MandatoryInitalDeposit : "Mandatory inital deposit" ,
    MaximumAccount : "Maximum account" ,
    IntersetRate : "Interset rate",
    OpeningFee : "Opening fee",
    MaintenanceFee : "Maintenance fee",
    Stampduty : "Stamp duty fee",
    next : "Next",
    back : "Back",
    WalletAccount : "Wallet Account",
  });

  $translateProvider.translations('ar', {
    CreateDailySavings: 'انشاء المدخرات اليومية',
    walletBalance : "رصيد المحفظة",
    NameOfAccount: 'اسم الحساب',
    TheValueIsTooLong : 'القيمة طويلة جدًا' ,
    DepositAccount : 'حساب إيداع',
    MinimumAmount : "الحد الأدنى 100 جنيه مصري (رسوم صيانة)",
    Source : "مصدر",
    WalletAccount : "حساب المحفظة",
    Conditions : "شروط",
    MandatoryInitalDeposit : "الإيداع الأولي الإلزامي",
    MaximumAccount : "الحد الأقصى للحساب",
    IntersetRate : "سعر الفائدة",
    OpeningFee : "رسوم الفتح",
    MaintenanceFee : "رسوم الصيانة" ,
    Stampduty : "رسوم الضريبة",
    next : "التالى" ,
    back : "الرجوع"

  });
  $translateProvider.preferredLanguage('en');
})



CreateDailySavingController.controller('CreateDailySavingController' , function($scope , $window , $state , $rootScope ,$state , $translate , $ionicPopover , languageService) {
  $scope.dsblBtn = true;

  $scope.curlanguage = $translate.use(languageService.getLanguage());
  $scope.curlanguage = $scope.curlanguage.$$state.value;

  $scope.createLang = languageService.getLanguage();

  let body = document.getElementsByTagName("body")[0];
  let leftSide = document.getElementById("leftSide");
  let backBtn = document.getElementById("backBtn");


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


   $scope.loadMore = function() {
    console.log("complete")
    $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.check = true
  }, 1000;

  $scope.next = function() {
    $state.go('plan');
    resetForm()
  }

  $scope.newWalletNameLength = 0;

  $scope.errorMsg = false;


  $scope.getData = function(wallet) {
    let newWallet = {
      name : wallet.name ,
      deposit : wallet.deposit
    }
    if(newWallet.name.length > 50) {
      $scope.errorMsg = true;
    }
    else {
      $scope.errorMsg = false;
    }
    $scope.newWalletNameLength = newWallet.name.length;

    if(newWallet.name != "" && newWallet.deposit != null && newWallet.name != undefined) {
      if(newWallet.deposit < 100 || $scope.newWalletNameLength > 50) {
        console.log("disable")
        $scope.dsblBtn = true;

      } else {
        $scope.dsblBtn = false;

      }
    } else {
      $scope.dsblBtn = true;

    }
  }

  function resetForm() {
    let name = document.getElementById("createName");
    name.value = "";
    let deposit = document.getElementById("deposit");
    deposit.value = "";
    $scope.dsblBtn = true;
    $scope.newWalletNameLength = 0;

  }


  $scope.goBackItem = function() {
    $window.history.go(-1);
  }
})
