
var chai = require('chai');
var assert = chai.assert;

var fearNotLetter = require('../src/missingLetters');

it('fearNotLetter', function() {
    assert.deepEqual(fearNotLetter('abce'), 'd', 'fearNotLetter("abce") should return "d".');
    assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i', 'fearNotLetter("abcdefghjklmno") should return "i".');
    assert.isUndefined(fearNotLetter('bcd'), 'fearNotLetter("bcd") should return undefined.');
    assert.isUndefined(fearNotLetter('yz'), 'fearNotLetter("yz") should return undefined.');
});
