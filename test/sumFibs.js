
var chai = require('chai');
var assert = chai.assert;

var sumFibs = require('../src/sumFibs');

it('sumFibs', function() {
    assert(typeof sumFibs(1) === 'number', 'sumFibs(1) should return a number.');
    assert.deepEqual(sumFibs(1000), 1785, 'sumFibs(1000) should return 1785.');
    assert.deepEqual(sumFibs(4000000), 4613732, 'sumFibs(4000000) should return 4613732.');
    assert.deepEqual(sumFibs(4), 5, 'sumFibs(4) should return 5.');
    assert.deepEqual(sumFibs(75024), 60696, 'sumFibs(75024) should return 60696.');
    assert.deepEqual(sumFibs(75025), 135721, 'sumFibs(75025) should return 135721.');
});
