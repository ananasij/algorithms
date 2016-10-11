
var chai = require('chai');
var assert = chai.assert;

var convertToRoman = require('../src/convertToRoman');

it('convertToRoman', function() {
    assert.deepEqual(convertToRoman(2), 'II', 'convertToRoman(2) should return "II".');
    assert.deepEqual(convertToRoman(3), 'III', 'convertToRoman(3) should return "III".');
    assert.deepEqual(convertToRoman(4), 'IV', 'convertToRoman(4) should return "IV".');
    assert.deepEqual(convertToRoman(5), 'V', 'convertToRoman(5) should return "V".');
    assert.deepEqual(convertToRoman(9), 'IX', 'convertToRoman(9) should return "IX".');
    assert.deepEqual(convertToRoman(12), 'XII', 'convertToRoman(12) should return "XII".');
    assert.deepEqual(convertToRoman(16), 'XVI', 'convertToRoman(16) should return "XVI".');
    assert.deepEqual(convertToRoman(29), 'XXIX', 'convertToRoman(29) should return "XXIX".');
    assert.deepEqual(convertToRoman(44), 'XLIV', 'convertToRoman(44) should return "XLIV".');
    assert.deepEqual(convertToRoman(45), 'XLV', 'convertToRoman(45) should return "XLV"');
    assert.deepEqual(convertToRoman(68), 'LXVIII', 'convertToRoman(68) should return "LXVIII"');
    assert.deepEqual(convertToRoman(83), 'LXXXIII', 'convertToRoman(83) should return "LXXXIII"');
    assert.deepEqual(convertToRoman(97), 'XCVII', 'convertToRoman(97) should return "XCVII"');
    assert.deepEqual(convertToRoman(99), 'XCIX', 'convertToRoman(99) should return "XCIX"');
    assert.deepEqual(convertToRoman(500), 'D', 'convertToRoman(500) should return "D"');
    assert.deepEqual(convertToRoman(501), 'DI', 'convertToRoman(501) should return "DI"');
    assert.deepEqual(convertToRoman(649), 'DCXLIX', 'convertToRoman(649) should return "DCXLIX"');
    assert.deepEqual(convertToRoman(798), 'DCCXCVIII', 'convertToRoman(798) should return "DCCXCVIII"');
    assert.deepEqual(convertToRoman(891), 'DCCCXCI', 'convertToRoman(891) should return "DCCCXCI"');
    assert.deepEqual(convertToRoman(1000), 'M', 'convertToRoman(1000) should return "M"');
    assert.deepEqual(convertToRoman(1004), 'MIV', 'convertToRoman(1004) should return "MIV"');
    assert.deepEqual(convertToRoman(1006), 'MVI', 'convertToRoman(1006) should return "MVI"');
    assert.deepEqual(convertToRoman(1023), 'MXXIII', 'convertToRoman(1023) should return "MXXIII"');
    assert.deepEqual(convertToRoman(2014), 'MMXIV', 'convertToRoman(2014) should return "MMXIV"');
    assert.deepEqual(convertToRoman(3999), 'MMMCMXCIX', 'convertToRoman(3999) should return "MMMCMXCIX"');
}
);