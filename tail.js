const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;
};

//TEST CODE

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


//Test Case 2: Crray with only one element should yield an empty array for its tail
const result2 = tail(["Hello"]);
assertEqual(result2.length,0);
assertEqual(result2[0], undefined);

//Test Case3: Empty array should yield an empty array for its tail
const result3 = tail([]);
assertEqual(result3.length,0);
assertEqual(result3[0], undefined);