// Import functions
const assert = require('chai').assert;
const assertEqual = require(`../assertEqual`);

//TEST CODE

describe('#assertEqual', () => {
  it('returns false for "Lighthouse Labs", "Bootcamp"', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
  it('returns true for 1, 1', () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });
  it('returns true for "Hello", "Hello"', () => {
    assert.strictEqual(assertEqual("Hello","Hello"), true);
  });
  it('returns false for 2, "2"', () => {
    assert.strictEqual(assertEqual(2, "2"), false);
  })  
});