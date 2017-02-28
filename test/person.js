var chai = require('chai');
var assert = chai.assert;

var Person = require('../src/person');
var bob = new Person('Bob Ross');

it('Person', function() {
    assert.deepEqual(
        Object.keys(bob).length, 6, 'Object.keys(bob).length should return 6.'
    );
    assert.deepEqual(
        bob instanceof Person, true, 'bob instanceof Person should return true.'
    );
    assert.deepEqual(
        bob.firstName, undefined, 'bob.firstName should return undefined.'
    );
    assert.deepEqual(
        bob.lastName, undefined, 'bob.lastName should return undefined.'
    );
    assert.deepEqual(
        bob.getFirstName(), 'Bob', 'bob.getFirstName() should return "Bob".'
    );
    assert.deepEqual(
        bob.getLastName(), 'Ross', 'bob.getLastName() should return "Ross".'
    );
    assert.deepEqual(
        bob.getFullName(), 'Bob Ross', 'bob.getFullName() should return "Bob Ross".'
    );
    assert.strictEqual(
        (function() { bob.setFirstName('Haskell'); return bob.getFullName(); })(),
        'Haskell Ross',
        'bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").'
    );
    assert.strictEqual(
        (function() { var _bob = new Person('Haskell Ross'); _bob.setLastName("Curry"); return _bob.getFullName(); })(),
        'Haskell Curry',
        'bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").'
    );
    assert.strictEqual(
        (function() { bob.setFullName('Haskell Curry'); return bob.getFullName(); })(),
        'Haskell Curry',
        'bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").'
    );
    assert.strictEqual(
        (function() { bob.setFullName('Haskell Curry'); return bob.getFirstName(); })(),
        'Haskell',
        'bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").'
    );
    assert.strictEqual(
        (function() { bob.setFullName('Haskell Curry'); return bob.getLastName(); })(),
        'Curry',
        'bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").'
    );
});
