var chai = require('chai');
var assert = chai.assert;

var pairwise = require('../src/pairwise');

it('pairwise', function() {
    assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11, 'pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.');
    assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1, 'pairwise([1, 3, 2, 4], 4) should return 1.');
    assert.deepEqual(pairwise([1, 1, 1], 2), 1, 'pairwise([1, 1, 1], 2) should return 1.');
    assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10, 'pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.');
    assert.deepEqual(pairwise([], 100), 0, 'pairwise([], 100) should return 0.');
});
