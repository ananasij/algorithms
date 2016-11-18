
function uniteUnique(arr) {
    var input = Array.from(arguments);
    var result = [];

    input.forEach(function(innerArray) {
        innerArray.forEach(function(element) {
            if (result.indexOf(element) === -1) {
                result.push(element);
            }
        });
    });
    return result;
}

module.exports = uniteUnique;