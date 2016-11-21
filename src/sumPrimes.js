function sumPrimes(num) {
    var currentNum = 2;
    var previousPrimes = [];

    while (currentNum <= num) {
        if (currentNum === 2 || isPrime(currentNum, previousPrimes)) {
            previousPrimes.push(currentNum);
        }
        currentNum += 1;
    }

    return previousPrimes.reduce(function(a, b) {
        return a + b;
    });
}

function isPrime(number, currentPrimesList) {
    for (var i=0; i<currentPrimesList.length; i++) {
        if (number % currentPrimesList[i] === 0) {
            return false;
        }
    }
    return true;
}

module.exports = sumPrimes;
