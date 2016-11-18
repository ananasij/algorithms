
function fearNotLetter(str) {
    var letters = str.split('');
    var missing = '';
    var currentIndex = letters[0].charCodeAt(0);

    for (var i=0; i<letters.length; i++) {
        if (letters[i].charCodeAt(0) - currentIndex > 1) {
            missing = String.fromCharCode(currentIndex + 1);
            return missing;
        }
        currentIndex = letters[i].charCodeAt(0);
    }

    return undefined;
}

module.exports = fearNotLetter;