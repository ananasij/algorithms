
var chai = require('chai');
var assert = chai.assert;

var convertHTML = require('../src/convertHTML');

it('convertHTML', function() {
    assert.match(
        convertHTML('Dolce & Gabbana'),
        /Dolce &amp; Gabbana/,
        'convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.'
    );
    assert.match(
        convertHTML('Hamburgers < Pizza < Tacos'),
        /Hamburgers &lt; Pizza &lt; Tacos/,
        'convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &&#8203;lt; Tacos.'
    );
    assert.match(
        convertHTML('Sixty > twelve'),
        /Sixty &gt; twelve/,
        'convertHTML("Sixty > twelve") should return Sixty &gt; twelve.'
    );
    assert.match(
        convertHTML('Stuff in "quotation marks"'),
        /Stuff in &quot;quotation marks&quot;/,
        'convertHTML(&apos;Stuff in "quotation marks"&apos;) should return Stuff in &quot;quotation marks&&#8203;quot;.'
    );
    assert.match(
        convertHTML("Shindler's List"),
        /Shindler&apos;s List/,
        'convertHTML("Shindler&apos;s List") should return Shindler&apos;s List.'
    );
    assert.match(
        convertHTML('<>'),
        /&lt;&gt;/,
        'convertHTML("<>") should return &lt;&gt;.'
    );
    assert.strictEqual(
        convertHTML('abc'),
        'abc',
        'convertHTML("abc") should return abc.'
    );
});
