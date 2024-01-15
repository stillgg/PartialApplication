"use strict";

const tagged = (pref, str) => `[${pref}] ${str}`;

const tagDate = (strDate) => {
  const date = new Date().toISOString().substring(0, 10);
  // Define function tagDate that prepends current date to the string.
  // E.g. tagDate('My String') === '[2019-11-14] My String'
  // Use function tagged to implement tagDate.
  return tagged(date, strDate);
};

module.exports = { tagDate };
