// Import assertEqual
const assertEqual = require('./assertEqual');

// Function that takes in a sentence and returns a count of each of the letters in the sentence.
const countLetters = function(input) {
  let newObject = {};
  for (const letter of input) {
    if (letter !== " ") {
      if (newObject.hasOwnProperty(letter)) {
        newObject[letter] += 1;
      } else {
        newObject[letter] = 1;
      }
    }
  }
  return newObject;
};

module.exports = countLetters;

//TEST CODE
assertEqual(countLetters("LHL")["L"], 2);
assertEqual(countLetters("Hello World")["l"], 3);
assertEqual(countLetters(" ")[" "] , undefined);
