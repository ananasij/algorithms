
var chai = require('chai');
var assert = chai.assert;

var booWho = require('../src/booWho');

it('booWho', function() {
    assert.strictEqual(booWho(true), true, 'booWho(true) should return true.');
    assert.strictEqual(booWho(false), true, 'booWho(false) should return true.');
    assert.strictEqual(booWho([1, 2, 3]), false, 'booWho([1, 2, 3]) should return false.');
    assert.strictEqual(booWho([].slice), false, 'booWho([].slice) should return false.');
    assert.strictEqual(booWho({ a: 1 }), false, 'booWho({ "a": 1 }) should return false.');
    assert.strictEqual(booWho(1), false, 'booWho(1) should return false.');
    assert.strictEqual(booWho(NaN), false, 'booWho(NaN) should return false.');
    assert.strictEqual(booWho('a'), false, 'booWho("a") should return false.');
    assert.strictEqual(booWho('true'), false, 'booWho("true") should return false.');
    assert.strictEqual(booWho('false'), false, 'booWho("false") should return false.');
});
