function steamrollArray(inputArr) {
    var flatArr = [];
    inputArr.forEach(function(element) {
        flattenArray(element);
    });

    return flatArr;

    function flattenArray(item) {
        if (Array.isArray(item)) {
            item.forEach(function(element) {
                flattenArray(element);
            });
        } else {
            flatArr.push(item);
        }
    }
}

module.exports = steamrollArray;
