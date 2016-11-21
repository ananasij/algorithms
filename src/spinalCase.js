function spinalCase(str) {
    var converted = str;

    converted = converted.replace(/[a-z][A-Z]/g, addDash).replace(/[a-z][^A-Za-z]+[A-z]/g, addDash);
    return converted.toLowerCase();
}

function addDash(twoLetters) {
    return twoLetters[0] + '-' + twoLetters[twoLetters.length - 1];
}

module.exports = spinalCase;
