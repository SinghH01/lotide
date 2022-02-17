//Function to compare two arrays
const eqArrays = require(`./eqArrays`);

// Print message if arrays are equal or not
const assertArraysEqual = function(array1, array2) {
  let comparisonResult = eqArrays(array1, array2);
  if (comparisonResult === true) {
    console.log(`✅  ${array1} === ${array2}`);
  } else {
    console.log(`❌ ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;