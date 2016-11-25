
var chai = require('chai');
var assert = chai.assert;

var addTogether = require('../src/addTogether');

it('addTogether', function() {
    assert.deepEqual(addTogether(2, 3), 5, 'addTogether(2, 3) should return 5.');
    assert.deepEqual(addTogether(2)(3), 5, 'addTogether(2)(3) should return 5.');
    assert.isUndefined(addTogether('http://bit.ly/IqT6zt'), 'addTogether("http://bit.ly/IqT6zt") should return undefined.');
    assert.isUndefined(addTogether(2, '3'), 'addTogether(2, "3") should return undefined.');
    assert.isUndefined(addTogether(2)([3]), 'addTogether(2)([3]) should return undefined.');
}
);
