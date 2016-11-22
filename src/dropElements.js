function dropElements(arr, func) {
    var result = [];

    for (var i=0; i< arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return result;
}

module.exports = dropElements;
