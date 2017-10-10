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

  it('should return "X" when user inputs "10"', function(){
    expect(testNumeral.converter(10)).toBe('X');
  });

  it('should return "L" when user inputs "50"', function(){
    expect(testNumeral.converter(50)).toBe('L');
  });

  it('should return "C" when user inputs "100"', function(){
    expect(testNumeral.converter(100)).toBe('C');
  });

  it('should return "D" when user inputs "500"', function(){
    expect(testNumeral.converter(500)).toBe('D');
  });

  it('should return "M" when user inputs "1000"', function(){
    expect(testNumeral.converter(1000)).toBe('M');
  });

  it('should return correct numeral when user inputs any applicable number', function(){
    expect(testNumeral.converter(321)).toBe('CCCXXI');
  });
});
