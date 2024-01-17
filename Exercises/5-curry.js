"use strict";

// Check 4 digit pin.
const EXPECTED_PIN = "4967";
const checkPin = (...code) => code.join("") === EXPECTED_PIN;

// Define function curry that accepts the length of the function
// (amount of function arguments) and the function.

// first implementation
// const curry = (len, func) => {
//   return function curried(...args) {
//     if (len > args.length) {
//       return (...args2) => curried(...args.concat(args2));
//     }
//     return func(...args);
//   };
// };

// second solution
const curry =
  (len, func) =>
  (...args) => {
    const len2 = args.length;
    if (len > len2) {
      const fn = func.bind(null, ...args);
      return curry(len - len2, fn);
    } else {
      return func(...args);
    }
  };

// Allows to enter pin code by one character,
// Usage: press('3')('4')('5')('6')

const press = curry(4, checkPin);
// console.log(press("3")("4")("5")("6"));
module.exports = { press };
