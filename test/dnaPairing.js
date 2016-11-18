
var chai = require('chai');
var assert = chai.assert;

var pairElement = require('../src/dnaPairing');

it('pairElement', function() {
    assert.deepEqual(
        pairElement('ATCGA'),
        [['A', 'T'], ['T', 'A'], ['C', 'G'], ['G', 'C'], ['A', 'T']],
        'pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].'
    );
    assert.deepEqual(
        pairElement('TTGAG'),
        [['T', 'A'], ['T', 'A'], ['G', 'C'], ['A', 'T'], ['G', 'C']],
        'pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].'
    );
    assert.deepEqual(
        pairElement('CTCTA'),
        [['C', 'G'], ['T', 'A'], ['C', 'G'], ['T', 'A'], ['A', 'T']],
        'pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].'
    );
}
);
