function sym() {
    var arrays = Array.from(arguments);
    return arrays.reduce(function(acc, val) {
        return sym2(acc, val);
    });
}

function sym2(arr1, arr2) {
    var a1 = arr1;
    var a2 = arr2;
    var diff2 = [];
    for (var i = 0; i < a1.length; i += 1) {
        var numPosition = a2.indexOf(a1[i]);
        if (numPosition !== -1) {
            a2 = a2.filter(function(value) {
                return value !== a1[i];
            });
        } else if (diff2.indexOf(a1[i]) === -1) {
            diff2.push(a1[i]);
        }
    }
    for (var j = 0; j < a2.length; j += 1) {
        if (diff2.indexOf(a2[j]) === -1) {
            diff2.push(a2[j]);
        }
    }
    return diff2;
}

module.exports = sym;
