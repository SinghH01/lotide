//Import assertEqual to compare result
const assertEqual = require('./index').assertEqual;

//Takes in an object and callback and returns the first key that meets the criteria specified in callback
const findKey = function(object, callback) {
  let result = undefined;
  for (const item in object) {
    if (callback(object[item]) === true) {
      result = item;
      break;
    }
  }
  return result;
};

module.exports = findKey;




// TEST CODE

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");