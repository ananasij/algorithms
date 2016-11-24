function smallestCommons(arr) {
    var result;
    var mult = 0;
    var first;
    var last;
    var numbers = [];

    if (arr[0] === arr[1]) {
        return arr[0];
    }

    var sortedArr = arr.sort(function(a, b) {
        return a - b;
    });
    first = sortedArr[0];
    last = sortedArr[1];

    for (var i = last; i >= first; i--) {
        numbers.push(i);
    }

    while (true) {
        mult += 1;
        result = arr[0] * mult;
        for (var i = 0, length = numbers.length; i < length; i++) {
            if (result % numbers[i]) {
                break;
            } else if (i === length - 1) {
                return result;
            }
        }
    }
}

module.exports = smallestCommons;