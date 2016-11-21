
var chai = require('chai');
var assert = chai.assert;

var sumPrimes = require('../src/sumPrimes');

it('sumPrimes', function() {
    assert.deepEqual(typeof sumPrimes(10), 'number', 'sumPrimes(10) should return a number.');
    assert.deepEqual(sumPrimes(10), 17, 'sumPrimes(10) should return 17.');
    assert.deepEqual(sumPrimes(977), 73156, 'sumPrimes(977) should return 73156.');
});
