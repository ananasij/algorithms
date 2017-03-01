function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var name;
    var avgAlt;
    var T;
    var orbitalPeriods = [];

    for (var i = 0; i < arr.length; i += 1) {
        name = arr[i].name;
        avgAlt = arr[i].avgAlt;
        T = Math.pow((Math.pow((avgAlt + earthRadius), 3) / GM), 0.5) * 2 * Math.PI;
        orbitalPeriods.push({ name: name, orbitalPeriod: Math.round(T) });
    }
    return orbitalPeriods;
}

module.exports = orbitalPeriod;
