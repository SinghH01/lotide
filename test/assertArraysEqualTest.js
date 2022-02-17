// Import assertArraysEqual function
const assertArraysEqual = require(`../assertArraysEqual`);

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Equal
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Not Equal
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Equal
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Not Equal