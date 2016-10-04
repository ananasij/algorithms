function diffArray(arr1, arr2) {
    var newArr;
    var arr1Filtered = arr1;
    var arr2Filtered = arr2;
    arr1Filtered = filterArray(arr1Filtered, arr2);
    arr2Filtered = filterArray(arr2Filtered, arr1);
    newArr = arr1Filtered.concat(arr2Filtered);
    return newArr;
}

function filterArray(array, mask) {
    var arrayFiltered = array;
    for (var i = 0; i <= mask.length; i++) {
        arrayFiltered = arrayFiltered.filter(function(value) {
            return value !== mask[i];
        });
    }
    return arrayFiltered;
}

module.exports = diffArray;