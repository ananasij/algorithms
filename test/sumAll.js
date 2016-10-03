var chai = require('chai');
var assert = chai.assert;

var sumAll = require('../src/sumAll');

it('sumAll', function() {
    assert(typeof sumAll([1, 4]) === 'number', 'sumAll([1, 4]) should return a number.');
    assert.deepEqual(sumAll([1, 4]), 10, 'sumAll([1, 4]) should return 10.');
    assert.deepEqual(sumAll([4, 1]), 10, 'sumAll([4, 1]) should return 10.');
    assert.deepEqual(sumAll([5, 10]), 45, 'sumAll([5, 10]) should return 45.');
    assert.deepEqual(sumAll([10, 5]), 45, 'sumAll([10, 5]) should return 45.');
});