
var chai = require('chai');
var assert = chai.assert;

var translatePigLatin = require('../src/translatePigLatin');

it('translatePigLatin', function() {
    assert.deepEqual(translatePigLatin('california'), 'aliforniacay', 'translatePigLatin("california") should return "aliforniacay".');
    assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay', 'translatePigLatin("paragraphs") should return "aragraphspay".');
    assert.deepEqual(translatePigLatin('glove'), 'oveglay', 'translatePigLatin("glove") should return "oveglay".');
    assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway', 'translatePigLatin("algorithm") should return "algorithmway".');
    assert.deepEqual(translatePigLatin('eight'), 'eightway', 'translatePigLatin("eight") should return "eightway".');
});
