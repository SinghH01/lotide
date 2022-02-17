//Function to compare two arrays
const eqArrays = function(array1, array2) {
  let returnValue = false;
  if (array1.length === array2.length) {
    if (array1.length === 0) {
      returnValue = true;
    } else {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
          returnValue = true;
        } else {
          returnValue = false;
        }
      }
    }
  }
  return returnValue;
};

// Function to print appropriate message
const assertArraysEqual = function(array1, array2) {
  let comparisonResult = eqArrays(array1, array2);
  if (comparisonResult === true) {
    console.log("✅ Both Array's are Equal");
  } else {
    console.log("❌ Both Array's are not Equal");
  }
   
};

// slice of the array with elements taken from the beginning until returns a truthy value
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
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(data1, item => item < 0), [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);



