var chai = require('chai'
);

var assert = chai.assert;

var truthCheck = require('../src/truthCheck'
);

it('truthCheck', function() {
    assert.strictEqual(
        truthCheck(
            [
                { user: 'Tinky-Winky', sex: 'male' },
                { user: 'Dipsy', sex: 'male' },
                { user: 'Laa-Laa', sex: 'female' },
                { user: 'Po', sex: 'female' }
            ],
            'sex'
        ),
        true,
        'truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user":"Laa-Laa", ' +
        '"sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.'
    );

    assert.strictEqual(
        truthCheck(
            [
                { user: 'Tinky-Winky', sex: 'male' },
                { user: 'Dipsy' },
                { user: 'Laa-Laa', sex: 'female' },
                { user: 'Po', sex: 'female' }
            ],
            'sex'
        ),
        false,
        'truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"},' +
        ' {"user": "Po", "sex": "female"}], "sex") should return false.'
    );

    assert.strictEqual(
        truthCheck(
            [
                { user: 'Tinky-Winky', sex: 'male', age: 2 },
                { user: 'Dipsy', sex: 'male', age: 0 },
                { user: 'Laa-Laa', sex: 'female', age: 5 },
                { user: 'Po', sex: 'female', age: 4 }
            ],
            'age'
        ),
        false,
        'truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, ' +
        '{"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") ' +
        'should return false.'
    );

    assert.strictEqual(
        truthCheck(
            [
                { name: 'Pete', onBoat: true },
                { name: 'Repeat', onBoat: true },
                { name: 'FastFoward', onBoat: null }
            ],
            'onBoat'
        ),
        false,
        'truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, ' +
        '{"name": "FastFoward", "onBoat": null }], "onBoat") should return false'
    );

    assert.strictEqual(
        truthCheck(
            [
                { name: 'Pete', onBoat: true },
                { name: 'Repeat', onBoat: true, alias: 'Repete' },
                { name: 'FastFoward', onBoat: true }
            ],
            'onBoat'
        ),
        true,
        'truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete" }, ' +
        '{"name": "FastFoward", "onBoat": true}], "onBoat") should return true'
    );

    assert.strictEqual(
        truthCheck(
            [
                { single: 'yes' }
            ],
            'single'
        ),
        true,
        'truthCheck([{"single": "yes"}], "single") should return true'
    );

    assert.strictEqual(
        truthCheck(
            [
                { single: '' },
                { single: 'double' }
            ],
            'single'
        ),
        false,
        'truthCheck([{"single": ""}, {"single": "double"}], "single") should return false'
    );

    assert.strictEqual(
        truthCheck(
            [
                { single: 'double' },
                { single: undefined }
            ],
            'single'
        ),
        false,
        'truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false'
    );

    assert.strictEqual(
        truthCheck(
            [
                { single: 'double' },
                { single: NaN }
            ],
            'single'
        ),
        false,
        'truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false'
    );
}
);
