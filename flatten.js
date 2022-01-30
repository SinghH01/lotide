//Function to compare two arrays
const eqArrays = function(array1, array2) {
  let returnValue = false;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        returnValue = true;
      } else {
        returnValue = false;
      }
    }
  }
  return returnValue;
};

// Function to print appropriate message after comparing two array's
const assertArraysEqual = function(array1, array2) {
  let comparisonResult = eqArrays(array1, array2);
  if (comparisonResult === true) {
    console.log("✅ Both Array's are Equal");
  } else {
    console.log("❌ Both Array's are not Equal");
  }
   
};
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

// TEST CODE

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// console.log(flatten(["Hello",["my"], ["name",["is:"], "Harshbir Singh"]])); // => [ 'Hello', 'my', 'name', [ 'is:' ], 'Harshbir Singh' ]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["Hello",["my"], ["name",["is:"], "Harshbir Singh"]]), [ 'Hello', 'my', 'name', [ 'is:' ], 'Harshbir Singh' ]);

