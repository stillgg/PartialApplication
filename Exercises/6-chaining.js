"use strict";

// Check 4 digit pin.
const EXPECTED_PIN = "4967";
const checkPin = (...code) => code.join("") === EXPECTED_PIN;

// Implement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

const press = (digit) => {
  const func = (...digits) => {
    if (digits.length === EXPECTED_PIN.length)
      return digits.join("") === EXPECTED_PIN;

    return {
      press: (digit) => {
        return func.call(null, ...digits, digit);
      },
    };
  };

  return func(digit);
};

// console.log(press("3").press("4").press("5").press("6"));

// console.log(press("4").press("9").press("6").press("7"));

module.exports = { press };
