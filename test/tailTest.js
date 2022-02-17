// Import functions
const assert = require('chai').assert;
const tail   = require('../tail');


//TEST CODE
describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('returns empty array [] for an array with one element', () => {
    assert.deepEqual(tail(["Hello"]),[]);
  });
  it('returns an empty array [] for emply array []', () => {
    assert.deepEqual(tail([]), []);
  });
});