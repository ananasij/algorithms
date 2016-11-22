function smallestCommons(arr) {
    var result;
    var mult = 0;
    var first;
    var last;
    var numbers = [];

    if (arr[0] === arr[1]) {
        return arr[0];
    } else if (arr[0] < arr[1]) {
        first = arr[0];
        last = arr[1];
    } else {
        first = arr[1];
        last = arr[0];
    }

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