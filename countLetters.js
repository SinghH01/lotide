const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//TEST CODE
assertEqual(countLetters("LHL")["L"], 2);
assertEqual(countLetters("Hello World")["l"], 3);
assertEqual(countLetters(" ")[" "] , undefined);
