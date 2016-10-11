var dictionary = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
};

function convertToRoman(number) {
    var convertedNum = '';
    var digits = ('' + number).split('').reverse();
    if (number >= 5000) {
        convertedNum = 'Jupiter will punish you for such a big digit. Good roman should be modest. (Only digits less than 5000 can be converted.)';
        return convertedNum;
    }
    digits.forEach(function(value, index) {
        convertedNum = convertDigitToRoman(value, index) + convertedNum;
    });

    return convertedNum;
}

function convertDigitToRoman(digit, position) {
    var romanDigit = '';
    var romanDigitsForPosition = getRomanDigitsForPosition(position);
    var n1 = romanDigitsForPosition[0];
    var n5 = romanDigitsForPosition[1];
    var n10 = romanDigitsForPosition[2];


    if (digit % 5 >= 0 && digit % 5 < 4) {
        if (digit < 5) {
            romanDigit = n1.repeat(digit % 5);
        } else {
            romanDigit = n5 + n1.repeat(digit % 5);
        }
    } else if (digit == 4) {
        romanDigit = n1 + n5;
    } else if (digit == 9) {
        romanDigit = n1 + n10;
    }
    return romanDigit;
}

function getRomanDigitsForPosition(position) {
    var n1 = '';
    var n5 = '';
    var n10 = '';
    switch (position) {
        case 0:
            n1 = dictionary[1];
            n5 = dictionary[5];
            n10 = dictionary[10];
            break;
        case 1:
            n1 = dictionary[10];
            n5 = dictionary[50];
            n10 = dictionary[100];
            break;
        case 2:
            n1 = dictionary[100];
            n5 = dictionary[500];
            n10 = dictionary[1000];
            break;
        case 3:
            n1 = dictionary[1000];
            break;
        default:
            n1 = '';
            n5 = '';
            n10 = '';
            break;
    }
    return [n1, n5, n10];
}
module.exports = convertToRoman;
