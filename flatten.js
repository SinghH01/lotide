//Import functions
const assertArraysEqual = require('./assertArraysEqual');

//Takes in an array that contains elements including nested array of elements and returns a flattened version of the array
const flatten = function(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = flatten;


// TEST CODE

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["Hello",["my"], ["name",["is:"], "Harshbir Singh"]]), [ 'Hello', 'my', 'name', [ 'is:' ], 'Harshbir Singh' ]);

