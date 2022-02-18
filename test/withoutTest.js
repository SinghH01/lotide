// Import functions
const assert = require('chai').assert;
const without = require('../index').without;

//TEST CODE

describe('#without', () => {
  it('returns [2,3] for ([1, 2, 3], [1])', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2,3]);
  });
  it('returns ["1", "2"] for (["1", "2", "3"], [1, 2, "3"])', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it('returns ["hello", "world"] for (["hello", "world", "lighthouse"],["lighthouse"])', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"],["lighthouse"]),["hello", "world"]);
  });
});