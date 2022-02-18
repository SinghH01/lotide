//Import functions
const assertArraysEqual = require('./assertArraysEqual');

// Takes in a string and returns all indices of letter positions in the string
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