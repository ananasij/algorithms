var chai = require('chai');
var assert = chai.assert;

var diffArray = require('../src/diffArray.js');

it('diffArray', function() {
    assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === "object",
        'message: <code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code> should return an array.');
    assert.sameMembers(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
            ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"],
        'message: <code>["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ' +
        '["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return <code>["pink wool"]</code>.');
    assert.sameMembers(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],
            ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"],
        'message: <code>["andesite", "grass", "dirt", "pink wool", "dead shrub"], ' +
        '["diorite", "andesite", "grass", "dirt", "dead shrub"]</code> should return <code>["diorite", "pink wool"]</code>.');
    assert.sameMembers(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), [],
        'message: <code>["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]</code> ' +
        'should return <code>[]</code>.');
    assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4],
        'message: <code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return <code>[4]</code>.');
    assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4],
        'message: <code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</code> should return <code>["piglet", 4]</code>.');
    assert.sameMembers(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), ["snuffleupagus", "cookie monster", "elmo"],
        'message: <code>[], ["snuffleupagus", "cookie monster", "elmo"]</code> should return <code>' +
        '["snuffleupagus", "cookie monster", "elmo"]</code>.');
    assert.sameMembers(diffArray([1, "calf", 3, "piglet"], [7, "filly"]), [1, "calf", 3, "piglet", 7, "filly"],
        'message: <code>[1, "calf", 3, "piglet"], [7, "filly"]</code> should return <code>[1, "calf", 3, "piglet", 7, "filly"]</code>.');
});



