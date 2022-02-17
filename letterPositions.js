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


const lettterPositions = function(input) {
  const results = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      if (results.hasOwnProperty(input[i])) {
        results[input[i]].push(i);
      } else {
        results[input[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = lettterPositions;

//TEST CODE
assertArraysEqual(lettterPositions("hello")["h"], [0]);
assertArraysEqual(lettterPositions("hello")["e"], [1]);
assertArraysEqual(lettterPositions("hello")["l"], [2,3]);
assertArraysEqual(lettterPositions("hello")["o"], [4]);