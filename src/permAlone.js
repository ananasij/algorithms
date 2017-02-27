function permAlone(str) {
    var permutations = 0;
    generatePermutations('', str);
    return permutations;

    function generatePermutations(start, rest) {
        var newStart;
        var newRest;
        if (rest) {
            for (var i = 0; i < rest.length; i += 1) {
                newStart = start + rest[i];
                newRest = rest.slice(0, i) + rest.slice(i + 1);
                generatePermutations(newStart, newRest);
            }
        } else if (!hasRepetitions(start)) {
            permutations += 1;
        }
    }
}

function hasRepetitions(str) {
    return (/([A-Z])\1+/ig).test(str);
}

module.exports = permAlone;
