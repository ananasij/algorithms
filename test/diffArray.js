var chai = require('chai');
var assert = chai.assert;

var diffArray = require('../src/diffArray.js');

it('diffArray', function() {
    assert(
        typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === 'object',
        'diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.'
    );

    assert.sameMembers(
        diffArray(
            ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
            ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
        ),
        ['pink wool'],
        '["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ' +
        '["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].'
    );

    assert.sameMembers(
        diffArray(
            ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
            ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
        ),
        ['diorite', 'pink wool'],
        '["andesite", "grass", "dirt", "pink wool", "dead shrub"], ' +
        '["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].'
    );

    assert.sameMembers(
        diffArray(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']),
        [],
        '["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].'
    );

    assert.sameMembers(
        diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]),
        [4],
        '[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].'
    );

    assert.sameMembers(
        diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]),
        ['piglet', 4],
        '[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].'
    );

    assert.sameMembers(
        diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']),
        ['snuffleupagus', 'cookie monster', 'elmo'],
        '[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].'
    );

    assert.sameMembers(
        diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']),
        [1, 'calf', 3, 'piglet', 7, 'filly'],
        '[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].'
    );
});

it('diffArray shoudn\'t modify arguments', function() {
    var arr1 = [1, 2, 3];
    var arr2 = [5, 6, 7];

    diffArray(arr1, arr2);

    assert.sameMembers(
        arr1,
        [1, 2, 3],
        'function shouldn\'t modify first argument'
    );

    assert.sameMembers(
        arr2,
        [5, 6, 7],
        'function shouldn\'t modify second argument'
    );
});

