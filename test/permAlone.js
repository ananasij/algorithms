var chai = require('chai');
var assert = chai.assert;

var permAlone = require('../src/permAlone');

it('permAlone', function() {
    assert.isNumber(permAlone('aab'), 'permAlone("aab") should return a number.');
    assert.strictEqual(permAlone('aab'), 2, 'permAlone("aab") should return 2.');
    assert.strictEqual(permAlone('aaa'), 0, 'permAlone("aaa") should return 0.');
    assert.strictEqual(permAlone('aabb'), 8, 'permAlone("aabb") should return 8.');
    assert.strictEqual(permAlone('a'), 1, 'permAlone("a") should return 1.');
    assert.strictEqual(permAlone('aaab'), 0, 'permAlone("aaab") should return 0.');
    assert.strictEqual(permAlone('aaabb'), 12, 'permAlone("aaabb") should return 12.');
});