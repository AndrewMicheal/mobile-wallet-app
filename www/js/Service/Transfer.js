let transferService = angular.module("starter");

transferService.factory("transferService" , function() {

  function setAmount(amount) {
    localStorage.setItem('transferAmount',amount)
  }

  function getAmount() {
    return localStorage.getItem("transferAmount");
  }

  return {
    setAmount ,
    getAmount
  }
})
