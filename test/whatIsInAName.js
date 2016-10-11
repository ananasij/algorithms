
var chai = require('chai');
var assert = chai.assert;

var whatIsInAName = require('../src/whatIsInAName');

it('whatIsInAName', function() {
    assert.deepEqual(
        whatIsInAName(
            [
                { first: 'Romeo', last: 'Montague' },
                { first: 'Mercutio', last: null },
                { first: 'Tybalt', last: 'Capulet' }
            ],
            { last: 'Capulet' }
        ),
        [
            { first: 'Tybalt', last: 'Capulet' }
        ],
        'whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, ' +
        '{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].');

    assert.deepEqual(
        whatIsInAName(
            [
                { a: 1 },
                { a: 1 },
                { a: 1, b: 2 }
            ],
            { a: 1 }
        ),
        [
            { a: 1 },
            { a: 1 },
            { a: 1, b: 2 }
        ],
        'whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) ' +
        'should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].');

    assert.deepEqual(
        whatIsInAName(
            [
                { a: 1, b: 2 },
                { a: 1 },
                { a: 1, b: 2, c: 2 }
            ],
            { a: 1, b: 2 }),
        [
            { a: 1, b: 2 },
            { a: 1, b: 2, c: 2 }
        ],
        'whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) ' +
        'should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].');

    assert.deepEqual(
        whatIsInAName(
            [
                { a: 1, b: 2 },
                { a: 1 },
                { a: 1, b: 2, c: 2 }
            ],
            { a: 1, c: 2 }
        ),
        [
            { a: 1, b: 2, c: 2 }
        ],
        'whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) ' +
        'should return [{ "a": 1, "b": 2, "c": 2 }].');
});
