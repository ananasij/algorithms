function findElement(arr, func) {
    var filteredArr = arr.filter(func);
    return filteredArr[0];
}

module.exports = findElement;