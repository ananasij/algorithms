
var chai = require('chai');
var assert = chai.assert;

var convertToRoman = require('../src/convertToRoman');

it('convertToRoman', function() {
    assert.deepEqual(convertToRoman(2), 'II', 'message: <code>convertToRoman(2)</code> should return "II".');
    assert.deepEqual(convertToRoman(3), 'III', 'message: <code>convertToRoman(3)</code> should return "III".');
    assert.deepEqual(convertToRoman(4), 'IV', 'message: <code>convertToRoman(4)</code> should return "IV".');
    assert.deepEqual(convertToRoman(5), 'V', 'message: <code>convertToRoman(5)</code> should return "V".');
    assert.deepEqual(convertToRoman(9), 'IX', 'message: <code>convertToRoman(9)</code> should return "IX".');
    assert.deepEqual(convertToRoman(12), 'XII', 'message: <code>convertToRoman(12)</code> should return "XII".');
    assert.deepEqual(convertToRoman(16), 'XVI', 'message: <code>convertToRoman(16)</code> should return "XVI".');
    assert.deepEqual(convertToRoman(29), 'XXIX', 'message: <code>convertToRoman(29)</code> should return "XXIX".');
    assert.deepEqual(convertToRoman(44), 'XLIV', 'message: <code>convertToRoman(44)</code> should return "XLIV".');
    assert.deepEqual(convertToRoman(45), 'XLV', 'message: <code>convertToRoman(45)</code> should return "XLV"');
    assert.deepEqual(convertToRoman(68), 'LXVIII', 'message: <code>convertToRoman(68)</code> should return "LXVIII"');
    assert.deepEqual(convertToRoman(83), 'LXXXIII', 'message: <code>convertToRoman(83)</code> should return "LXXXIII"');
    assert.deepEqual(convertToRoman(97), 'XCVII', 'message: <code>convertToRoman(97)</code> should return "XCVII"');
    assert.deepEqual(convertToRoman(99), 'XCIX', 'message: <code>convertToRoman(99)</code> should return "XCIX"');
    assert.deepEqual(convertToRoman(500), 'D', 'message: <code>convertToRoman(500)</code> should return "D"');
    assert.deepEqual(convertToRoman(501), 'DI', 'message: <code>convertToRoman(501)</code> should return "DI"');
    assert.deepEqual(convertToRoman(649), 'DCXLIX', 'message: <code>convertToRoman(649)</code> should return "DCXLIX"');
    assert.deepEqual(convertToRoman(798), 'DCCXCVIII', 'message: <code>convertToRoman(798)</code> should return "DCCXCVIII"');
    assert.deepEqual(convertToRoman(891), 'DCCCXCI', 'message: <code>convertToRoman(891)</code> should return "DCCCXCI"');
    assert.deepEqual(convertToRoman(1000), 'M', 'message: <code>convertToRoman(1000)</code> should return "M"');
    assert.deepEqual(convertToRoman(1004), 'MIV', 'message: <code>convertToRoman(1004)</code> should return "MIV"');
    assert.deepEqual(convertToRoman(1006), 'MVI', 'message: <code>convertToRoman(1006)</code> should return "MVI"');
    assert.deepEqual(convertToRoman(1023), 'MXXIII', 'message: <code>convertToRoman(1023)</code> should return "MXXIII"');
    assert.deepEqual(convertToRoman(2014), 'MMXIV', 'message: <code>convertToRoman(2014)</code> should return "MMXIV"');
    assert.deepEqual(convertToRoman(3999), 'MMMCMXCIX', 'message: <code>convertToRoman(3999)</code> should return "MMMCMXCIX"')});