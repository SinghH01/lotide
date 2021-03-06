// Import assertEqual
const assertEqual = require('./assertEqual');

//Takes in a collection of items and returns a specific subset of those items
const countOnly = function(allItems, itemsToCount) {
  let newObject = {};
  for (const items of allItems) {
    for (const key in itemsToCount) {
      if (items === key && itemsToCount[key]) {
        if (newObject.hasOwnProperty(items) === true) {
          newObject[items] += 1;
        } else {
          newObject[items] = 1;
        }
      }
    }
  }
  return newObject;
};

module.exports = countOnly;


// TEST CODE

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);