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


const map = function(array, callback) {
  let results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};



// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, item => item + "Modified"), ["groundModified", "controlModified", "toModified", "majorModified", "tomModified"]);
assertArraysEqual(map(words, item => item.length), [6, 7, 2, 5, 3]);
