// Import function to compare objects
const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;  // Importing Util Library
  
  let comparisonResult = eqObjects(actual, expected);
  if (comparisonResult === true) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;


// TEST CODE

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // Should pass
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "h" }); // Should fail