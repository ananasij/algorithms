
function whatIsInAName(collection, source) {
    var arrayToFilter = collection;
    var arr = [];
    for (var maskKey in source) {
        arrayToFilter.forEach(function(value) {
            if (value.hasOwnProperty(maskKey) && value[maskKey] === source[maskKey]) {
                arr.push(value);
            }
        });
        arrayToFilter = arr;
        arr = [];
    }

    return arrayToFilter;
}

module.exports = whatIsInAName;
