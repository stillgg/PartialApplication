"use strict";

// Check 4 digit pin.
const EXPECTED_PIN = "4967";
const checkPin = (...code) => code.join("") === EXPECTED_PIN;

// Implement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

//clear solution
// const press = (digit) => {
//   function wrapperFn(digits, pinLen) {
//     if (pinLen > digits.length) {
//       wrapperFn.press = (digit) => wrapperFn([...digits, digit], pinLen);

//       return wrapperFn;
//     }

//     return checkPin(...digits);
//   }

//   return wrapperFn([digit], 4);
// };

//short solution
const press = (digit) =>
  (function fn(...digits) {
    if (4 > digits.length) {
      fn.press = (digit) => fn(...digits, digit);
      return fn;
    }
    return checkPin(...digits);
  })(digit);

// console.log(press("3").press("4").press("5").press("6"));

// console.log(press("4").press("9").press("6").press("7"));

module.exports = { press };
