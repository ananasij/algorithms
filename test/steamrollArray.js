
var chai = require('chai');
var assert = chai.assert;

var steamrollArray = require('../src/steamrollArray');

it('steamrollArray', function() {
    assert.deepEqual(
        steamrollArray([[['a']], [['b']]]),
        ['a', 'b'],
        'steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].'
    );
    assert.deepEqual(
        steamrollArray([1, [2], [3, [[4]]]]),
        [1, 2, 3, 4],
        'steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].'
    );
    assert.deepEqual(
        steamrollArray([1, [], [3, [[4]]]]),
        [1, 3, 4],
        'steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].'
    );
    assert.deepEqual(
        steamrollArray([1, {}, [3, [[4]]]]),
        [1, {}, 3, 4],
        'steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].'
    );
}
);
