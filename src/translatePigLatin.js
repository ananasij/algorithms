
function translatePigLatin(str) {
    var letters = str.split('');
    var modified = str;

    if (isVowel(str[0])) {
        modified += 'way';
    } else {
        for (var i=0; i<letters.length; i++) {
            if (isVowel(letters[i])) break;
            else {
                modified = modified.substr(1) + letters[i];
            }
        }
        modified += 'ay';
    }

    return modified;
}

function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1;
}

module.exports = translatePigLatin;