function addTogether() {
    var args = Array.from(arguments);

    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            return undefined;
        }
    }

    if (args.length === 2) {
        return args[0] + args[1];
    } else if (args.length === 1) {
        return addTo;
    }
    return undefined;

    function addTo(second) {
        if (typeof second === 'number') {
            return args[0] + second;
        }
        return undefined;
    }
}

module.exports = addTogether;
