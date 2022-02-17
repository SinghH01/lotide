// Compare two arrays to be equal or not

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

module.exports = eqArrays;