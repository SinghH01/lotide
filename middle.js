//Function to compare two arrays
const eqArrays = function(array1, array2) {
  let returnValue = false;
  if (array1.length === array2.length) {
    if (array1.length === 0 ){
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

// Function to print appropriate message after comparing two array's
const assertArraysEqual = function(array1, array2) {
  let comparisonResult = eqArrays(array1, array2);
  if (comparisonResult === true) {
    console.log("✅ Both Array's are Equal");
  } else {
    console.log("❌ Both Array's are not Equal");
  }
   
};

const middle = function(array) {
  let returnArray = [];

  //For arrays with one or two elements, there is no middle. Return an empty array
  if(array.length === 0 || array.length === 1 || array.length === 2){
  
  // For arrays with odd number of elements, an array containing a single middle element should be returned. 
  } else if (array.length % 2 !== 0){
    returnArray.push(array[Math.floor(array.length/2)]);

  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  } else {    
    returnArray.push(array[Math.floor(array.length/2 - 1)]);
    returnArray.push(array[Math.floor(array.length/2)]);    
  }

  return returnArray;
}

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]),[]);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);