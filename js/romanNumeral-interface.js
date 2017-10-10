var RomanNumeral = require('./../js/romanNumeral.js').romanNumeralModule;

$(document).ready(function() {
  $("form#regularNumber").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    var romanNumeral = new RomanNumeral();
    var result = romanNumeral.converter(numberInput);
    $(".well").show();
    $(".rNumeral").text(result);
  });
});
