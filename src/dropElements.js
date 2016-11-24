function dropElements(arr, func) {

    for (var i=0; i< arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];
}

module.exports = dropElements;
