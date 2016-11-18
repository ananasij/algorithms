
function pairElement(str) {
    var dnaInput = str.split('');
    var dnaDict = { A: 'T', T: 'A', C: 'G', G: 'C'};
    var dnaPairs = [];

    dnaInput.forEach(function(element) {
        var dnaPair = [];
        dnaPair.push(element);
        dnaPair.push(dnaDict[element]);
        dnaPairs.push(dnaPair);
    });
    return dnaPairs;
}

module.exports = pairElement;