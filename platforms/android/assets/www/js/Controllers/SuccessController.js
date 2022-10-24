let SuccessController = angular.module('starter');

SuccessController.config(function($translateProvider) {
  $translateProvider.translations('en', {
    CreateDailySavings: 'Create Daily Savings',
    walletBalance : "wallet Balance",
    PlanDetails : "Plan details" ,
    DailyInterestRate : "Daily interest rate",
    MaintenanceFee : "Maintenance fee",
    NameAccount : "Name of account",
    Edit : "Edit" ,
    Condition : "Condition",
    MinimalBalance : "Minimal balance",
    MaximumBalance : "Maximum balance",
    CloseAccount : "Close account" ,
    Transactions : "Transactions" ,
    Transfer : "Transfer" ,
    Success : "Success" ,
    successMessage : "You successfully created your saving" ,
    successAccountMsg : "account",
    OK : "OK"
  });

  $translateProvider.translations('ar', {
    CreateDailySavings: 'انشاء المدخرات اليومية',
    walletBalance : "رصيد المحفظة",
    PlanDetails : "تفاصيل" ,
    DailyInterestRate : "معدل الفائدة اليومي",
    MaintenanceFee : "رسوم صيانة",
    NameAccount : "اسم الحساب",
    Edit : "تعديل" ,
    Condition : "شروط",
    MinimalBalance : "حد أدنى من الرصيد",
    MaximumBalance : "الحد الأقصى للرصيد",
    CloseAccount : "إغلاق الحساب" ,
    Transactions : "المعاملات" ,
    Transfer : "تحويل" ,
    Success : "نجاح" ,
    successMessage : "لقد نجحت في إنشاء حساب التوفير" ,
    successAccountMsg : "الخاص بك",
    OK : "موافق"

  });
  $translateProvider.preferredLanguage('en');
})

SuccessController.controller('SuccessController' , function($scope , $state  , $rootScope , languageService , $translate) {

  $scope.curlanguage = $translate.use(languageService.getLanguage());
  $scope.curlanguage = $scope.curlanguage.$$state.value;

  $scope.createLang = languageService.getLanguage();

  let body = document.getElementsByTagName("body")[0];


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


  $scope.loadMore = function() {
    console.log("complete")
    $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.check = true
  }, 1000;

  $scope.ok = function() {
    $state.go('rate');
  }

})
