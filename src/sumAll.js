function sumAll(arr) {
    var sum = 0;
    var start = Math.min.apply(null, arr);
    var end = Math.max.apply(null, arr);

    for (var i=start; i<=end; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll;