function pairwise(arr, arg) {
    var sum = 0;
    var arrCopy = arr;
    for (var i = 0; i < arrCopy.length; i += 1) {
        for (var j = i + 1; j < arrCopy.length; j += 1) {
            if (arrCopy[i] + arrCopy[j] === arg) {
                sum += i + j;
                arrCopy[i] = arrCopy[j] = NaN;
            }
        }
    }
    return sum;
}

module.exports = pairwise;
