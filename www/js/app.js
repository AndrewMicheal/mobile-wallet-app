// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
let app = angular.module('starter', ['ionic' , 'pascalprecht.translate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.PinCheck){
      window.cordova.plugins.PinCheck.isPinSetup(function(success){
       console.log("pin is setup.");
      }, function(fail){
       alert("Your device is not protected with a password. Please setup the password" + '\n الهاتف غير مأمن بكلمة مرور. يرجى تفعيل كلمة المرور للجهاز');
       navigator.app.exitApp();
      });
    }
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('Home',{
    url : "/home" ,
    templateUrl : "templates/Home.html" ,
    controller: "HomeController"
  })
  .state('Daily' , {
    url: "/daily" ,
    templateUrl : "templates/DailySaving.html",
    controller : "DailySavingController"
  })
  .state('createDaily',{
    url : "/create" ,
    templateUrl : "templates/createDailySaving.html",
    controller : "CreateDailySavingController"
  })
  .state('plan',{
    url : "/plan" ,
    templateUrl : "templates/PlanOverview.html",
    controller : "PlanController"
  })
  .state('terms' , {
    url:"/terms" ,
    templateUrl : "templates/Terms.html",
    controller: "TermsController"
  })
  .state('pin' , {
    url : "/pin" ,
    templateUrl : "templates/Pin.html",
    controller : "PinCodeController"
  })
  .state('success' , {
    url : "/success" ,
    templateUrl : "templates/successPage.html",
    controller : "SuccessController"
  })
  .state('rate' , {
    url : "/rate" ,
    templateUrl : "templates/Rate.html",
    controller : "RateController"
  })
  .state('submit' , {
    url : "/submit" ,
    templateUrl : "templates/dashboardSubmit.html",
    controller : "DashboardSubmitController"
  })
  .state('software-group-home' , {
    url : "/software-group-home" ,
    templateUrl : "templates/software-group-home.html",
    controller : "SoftwareGroupHomeController"
  })
  .state('vacation' , {
    url : "/vacation" ,
    templateUrl : "templates/Vacation.html",
    controller : "VacationController"
  })
  .state('transaction' , {
    url : "/transaction" ,
    templateUrl : "templates/Transaction.html",
    controller : "TransactionController"
  })
  .state('close-account' , {
    url : "/close-account" ,
    templateUrl : "templates/closeAccount.html",
    controller : "CloseAccountController"
  })
  .state('close-account-pin' , {
    url : "/close-account-pin" ,
    templateUrl : "templates/closeAccountPin.html",
    controller : "CloseAccountPinController"
  })
  .state('close-account-home' , {
    url : "/close-account-home" ,
    templateUrl : "templates/close-account-home.html",
    controller : "CloseAccountHomeController"
  })
  .state('close-account-rate' , {
    url : "/close-account-rate" ,
    templateUrl : "templates/close-account-rate.html",
    controller : "CloseAccountRateController"
  })
  .state('close-account-home-model' , {
    url : "/close-account-home-model" ,
    templateUrl : "templates/close-account-home-model.html",
    controller : "CloseAccountHomeModelController"
  })
  .state('Transfer' , {
    url : "/Transfer" ,
    templateUrl : "templates/Transfer.html",
    controller : "TransferController"
  })
  .state('TransferNote' , {
    url : "/TransferNote/:amount" ,
    templateUrl : "templates/transfer-note.html",
    controller : "TransferNoteController"
  })
  .state('TransferCancel' , {
    url : "/TransferCancel/:amount" ,
    templateUrl : "templates/transfer-cancel.html",
    controller : "TransferCancelController"
  })
  .state('TransferPin' , {
    url : "/TransferPin" ,
    templateUrl : "templates/Transfer-pin.html",
    controller : "TransterPiController"
  })
  $urlRouterProvider.otherwise('/software-group-home');
})



