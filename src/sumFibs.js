function sumFibs(num) {
    var sum = 1;
    var prevNums = [1, 1];
    var currentNum = 1;

    while (currentNum <= num) {
        if (currentNum%2) {
            sum += currentNum;
        }
        currentNum = prevNums[0] + prevNums[1];
        prevNums.push(currentNum);
        prevNums.shift();
    }

    return sum;
}

module.exports = sumFibs;
