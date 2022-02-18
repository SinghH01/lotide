//Import functions
const assertArraysEqual = require('./assertArraysEqual');

//Takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
const map = function(array, callback) {
  let results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;



// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, item => item + "Modified"), ["groundModified", "controlModified", "toModified", "majorModified", "tomModified"]);
assertArraysEqual(map(words, item => item.length), [6, 7, 2, 5, 3]);
