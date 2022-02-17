// Returns a new array without the first element of passed array
const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;
};

module.exports = tail;