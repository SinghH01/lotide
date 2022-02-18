// Import functions
const middle = require(`../index`).middle;
const assert = require("chai").assert;


// TEST CODE

describe("#middle", () => {
  it('returns empty array [] if there is only one element in array', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns empty array [] if there are only two elements in an array', () => {
    assert.deepEqual(middle([1, 2]),[]);
  });
  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });
  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });
});