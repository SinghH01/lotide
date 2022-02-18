//Import functions
const assertArraysEqual = require('./assertArraysEqual');

// Slice of the array with elements taken from the beginning until returns a truthy value
const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (callback(item) !== true) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

module.exports = takeUntil;



//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);
assertArraysEqual(takeUntil(data1, item => item < 0), [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);



