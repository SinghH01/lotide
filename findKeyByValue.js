// Import assertEqual
const assertEqual = require('./assertEqual');

// Takes in an object and a value and returns the first key that corresponds to that value
const findKeyByValue = function(inputObject, inputString) {
  let result;
  for (const keys in inputObject) {
    if (inputObject[keys] === inputString) {
      result = keys;
    } else {
      result = undefined;
    }
  }
  return result;
};

module.exports = findKeyByValue;


// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

