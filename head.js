const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  const firstItem = array[0];
  return firstItem;
};

//TEST CODE
assertEqual(head([1,2,3]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([6,7,8]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([1]),1);
assertEqual(head([]), undefined);