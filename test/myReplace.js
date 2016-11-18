
var chai = require('chai');
var assert = chai.assert;

var myReplace = require('../src/myReplace');

it('myReplace', function() {
    assert.deepEqual(
        myReplace(
            'Let us go to the store', 'store', 'mall'), 'Let us go to the mall',
        'myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".'
    );
    assert.deepEqual(
        myReplace(
            'He is Sleeping on the couch', 'Sleeping', 'sitting'), 'He is Sitting on the couch',
        'myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".'
    );
    assert.deepEqual(
        myReplace(
            'This has a spellngi error', 'spellngi', 'spelling'), 'This has a spelling error',
        'myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".'
    );
    assert.deepEqual(
        myReplace(
            'His name is Tom', 'Tom', 'john'), 'His name is John',
        'myReplace("His name is Tom", "Tom", "john") should return "His name is John".'
    );
    assert.deepEqual(
        myReplace(
            'Let us get back to more Coding', 'Coding', 'algorithms'), 'Let us get back to more Algorithms',
        'myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".'
    );
}
);