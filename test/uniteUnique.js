
var chai = require('chai');
var assert = chai.assert;

var uniteUnique = require('../src/uniteUnique');

it('uniteUnique', function() {
    assert.deepEqual(
        uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),
        [1, 3, 2, 5, 4],
        'uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].');
    assert.deepEqual(
        uniteUnique([1, 3, 2], [1, [5]], [2, [4]]),
        [1, 3, 2, [5], [4]],
        'uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].');
    assert.deepEqual(
        uniteUnique([1, 2, 3], [5, 2, 1]),
        [1, 2, 3, 5],
        'uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].');
    assert.deepEqual(
        uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]),
        [1, 2, 3, 5, 4, 6, 7, 8],
        'uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].');
});
