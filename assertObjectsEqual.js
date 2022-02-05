// Function to check if arrays are equal
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


// Function to compare objects
const eqObjects = function(object1, object2) {
  let result;
  // They have the same number of keys
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      //The value for each key in one object is the same as the value for that same key in the other object
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          result = true;
        } else {
          result = false;
          break;
        }
      } else if (object1[key] === object2[key]) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
  } else {
    result = false;
  }
  return result;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;  // Importing Util Library
  
  let comparisonResult = eqObjects(actual, expected);
  if (comparisonResult === true) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



// TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "h" });