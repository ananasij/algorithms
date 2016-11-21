
var chai = require('chai');
var assert = chai.assert;

var spinalCase = require('../src/spinalCase');

it('spinalCase', function() {
    assert.deepEqual(
        spinalCase('This Is Spinal Tap'),
        'this-is-spinal-tap',
        'spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".'
    );
    assert.strictEqual(
        spinalCase('thisIsSpinalTap'),
        'this-is-spinal-tap',
        'spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".'
    );
    assert.strictEqual(
        spinalCase('The_Andy_Griffith_Show'),
        'the-andy-griffith-show',
        'spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".'
    );
    assert.strictEqual(
        spinalCase('Teletubbies say Eh-oh'),
        'teletubbies-say-eh-oh',
        'spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".'
    );
    assert.strictEqual(
        spinalCase('AllThe-small Things'),
        'all-the-small-things',
        'spinalCase("AllThe-small Things") should return "all-the-small-things".'
    );
}
);
