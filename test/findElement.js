
var chai = require('chai');
var assert = chai.assert;

var findElement = require('../src/findElement');

it('findElement', function() {
    assert.strictEqual(
        findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }),
        8,
        'findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.'
    );
    assert.strictEqual(
        findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }),
        undefined,
        'findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.'
    );
}
);
