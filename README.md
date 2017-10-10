# _Roman Numeral Converter_

#### _A roman numeral Converter, 10.10.2017_

#### By _**Kristen Marie Kulha and Erik Zakrzewski**_

## Description

This web application allows users to convert numbers into roman numerals.

## Specifications
* _Any input that is not a valid Roman Numeral will return invalid/NaN_
  * Example Input: ""
  * Example Output: ""
* _Add the value of all the symbols_
  * Example Input: 6
  * Example Input: VI
* _Cannot take a number higher than 3,999_
  * Example Input: 4,000
  * Example Output: Roman numerals cannot count higher than 3,999
* _Separate ones_
  * Example Input: 1
  * Example Output: I
* _Separate tens_
  * Example Input: 10
  * Example Output: X
* _Separate by fifty_
  * Example input: 50
  * Example Output: L
* _Separate hundreds_
  * Example Input: 100
  * Example Output: C
* _Separate five hundreds_
  * Example Input: 500
  * Example Output: D
* _Separate thousands_
  * Example Input: 1000
  * Example Output: M

* _Identify if there more than 3 of the same character in row and switch to subtraction_
  * Example Input: 29
  * Example Output: XXIX
  * Example Input: 99
  * Example Output: XCIX


## Setup/Installation Requirements

* _Clone directory from github OR download_

* _Open index.html in web browser of choice._


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Feel free to contact us at kristen.m.kulha@gmail.com or erik.zak.sf@gmail.com_

## Technologies Used

_JavaScript, Node, Gulp, Karma, and Jasmine_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Kristen Marie Kulha and Erik Zakrzewski_**
