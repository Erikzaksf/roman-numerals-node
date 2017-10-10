var RomanNumeral = require('./../js/romanNumeral.js').romanNumeralModule;

describe('RomanNumeral', function() {
  var testNumeral;

  beforeEach(function() {
    testNumeral = new RomanNumeral();
  });

  it('should test any input that is not a valid Roman Numeral and return invalid/NaN', function(){
    expect(testNumeral.converter('')).toBe('');
  });

  it('should return "I" when user inputs "1"', function(){
    expect(testNumeral.converter(1)).toBe('I');
  });
});
