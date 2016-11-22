
var chai = require('chai');
var assert = chai.assert;

var dropElements = require('../src/dropElements');

it('dropElements', function() {
    assert.deepEqual(
        dropElements(
            [1, 2, 3, 4], function(n) {
                return n >= 3;
            }),
        [3, 4],
        'dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].'
    );
    assert.deepEqual(
        dropElements(
            [0, 1, 0, 1], function(n) {
                return n === 1;
            }),
        [1, 0, 1],
        'dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].'
    );
    assert.deepEqual(
        dropElements(
            [1, 2, 3], function(n) {
                return n > 0;
            }),
        [1, 2, 3],
        'dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].'
    );
    assert.deepEqual(
        dropElements(
            [1, 2, 3, 4], function(n) {
                return n > 5;
            }),
        [],
        'dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].'
    );
    assert.deepEqual(
        dropElements(
            [1, 2, 3, 7, 4], function(n) {
                return n > 3;
            }),
        [7, 4],
        'dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].'
    );
    assert.deepEqual(
        dropElements(
            [1, 2, 3, 9, 2], function(n) {
                return n > 2;
            }),
        [3, 9, 2],
        'dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].'
    );
}
);
