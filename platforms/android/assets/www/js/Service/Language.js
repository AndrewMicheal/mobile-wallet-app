let languageService = angular.module("starter");

languageService.factory("languageService" , function($rootScope) {

  let language;

  function setLanguage(lang) {
    localStorage.setItem("language" , lang);
    $rootScope.$emit("getLanguageValue")
  }

  function getLanguage() {
    return localStorage.getItem("language")
  }

  return {
    setLanguage ,
    getLanguage
  }
})
