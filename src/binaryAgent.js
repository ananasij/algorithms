function binaryAgent(str) {
    var translated = '';
    var binaryInput = str.split(' ');

    binaryInput.forEach(function(binary) {
        translated += String.fromCharCode(parseInt(binary, 2).toString(10));
    });

    return translated;
}

module.exports = binaryAgent;
