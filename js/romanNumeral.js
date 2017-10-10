
var converter = function(num) {

var result = "";
var numberInput = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var newNumber = "";
var romans = ["M", "CM", "D", 'CD', "C", "XC", "L", "XL", "X", "IX",  "V", "IV", "I" ];


for (var i = 0; i < numberInput.length; i++) {
    while (numberInput[i] <= num) {
      result += romans[i];
      num -= numberInput[i];
    }

}
return result;


}
