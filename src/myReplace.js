function myReplace(str, before, after) {
    var words;
    var newWords = [];
    var mask = [];

    mask = after.split('');
    if (before[0] === before[0].toUpperCase()) {
        mask[0] = mask[0].toUpperCase();
    } else {
        mask[0] = mask[0].toLowerCase();
    }
    mask = mask.join('');

    words = str.split(' ');
    words.forEach(function(word) {
        if (word === before) {
            newWords.push(mask);
        } else {
            newWords.push(word);
        }
    });

    return newWords.join(' ');
}

module.exports = myReplace;
