// Function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array

const without = function(source, itemsToremove) {
  let newArray = source.slice();
  for (let i = 0; i < itemsToremove.length; i++) {
    for (let j = 0; j < newArray.length; j++) {

      if (itemsToremove[i] === newArray[j]) {
        newArray.splice(j,1);
      }
    }
  }
  return newArray;
};

module.exports = without;