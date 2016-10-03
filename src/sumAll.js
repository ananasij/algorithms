function sumAll(arr) {
    var sum = 0;
    var start = Math.min(...arr);
    var end = Math.max(...arr);

    for (var i=start; i<=end; i++) {
        sum += i;
    }

    return sum;
}
