// Function to find middle of an array
const middle = function(array) {
  let returnArray = [];

  //For arrays with one or two elements, there is no middle. Return an empty array
  if (array.length === 0 || array.length === 1 || array.length === 2) {
  
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  } else if (array.length % 2 !== 0) {
    returnArray.push(array[Math.floor(array.length / 2)]);

  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  } else {
    returnArray.push(array[Math.floor(array.length / 2 - 1)]);
    returnArray.push(array[Math.floor(array.length / 2)]);
  }

  return returnArray;
};

module.exports = middle;