
var chai = require('chai');
var assert = chai.assert;

var smallestCommons = require('../src/smallestCommons');

it('smallestCommons', function() {
    assert.deepEqual(typeof smallestCommons([1, 5]), 'number', 'smallestCommons([1, 5]) should return a number.');
    assert.deepEqual(smallestCommons([1, 5]), 60, 'smallestCommons([1, 5]) should return 60.');
    assert.deepEqual(smallestCommons([5, 1]), 60, 'smallestCommons([5, 1]) should return 60.');
    assert.deepEqual(smallestCommons([1, 13]), 360360, 'smallestCommons([1, 13]) should return 360360.');
    assert.deepEqual(smallestCommons([23, 18]), 6056820, 'smallestCommons([23, 18]) should return 6056820.');
}
);
