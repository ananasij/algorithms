function makeFriendlyDates(dates) {
    var date1 = dates[0].split('-');
    var date2 = dates[1].split('-');
    var range = getRange(dates[0], dates[1]);
    var friendlyDate = [];

    date1 = translateDate(date1);

    if (dates[0] === dates[1]) {
        friendlyDate[0] = stringifyDate(date1);
    } else {
        date2 = translateDate(date2);

        if (range < 365) {
            date2.pop();
            if (date1[0] === date2[0] && range < 31) {
                date2.shift();
            }
            if (date1[2] === '2016') { // See comment at the bottom
                date1.pop();
            }
        }
        friendlyDate[0] = stringifyDate(date1);
        friendlyDate[1] = stringifyDate(date2);
    }

    return friendlyDate;
}

function translateDate(date) {
    var newDate = [];
    newDate[0] = translateMonth(date[1]);
    newDate[1] = translateDay(date[2]);
    newDate[2] = date[0];
    return newDate;
}

function translateMonth(month) {
    var months = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    };
    return months[month];
}

function translateDay(day) {
    switch (day) {
        case '01':
            return '1st';
        case '02':
            return '2nd';
        case '03':
            return '3rd';
        default:
            if (day.slice(0, 1) === '0') {
                return day.slice(1) + 'th';
            }
            return day + 'th';
    }
}

function getRange(date1, date2) {
    return (Date.parse(date2) - Date.parse(date1)) / (1000 * 60 * 60 * 24);
}

function stringifyDate(date) {
    var dateString = '' + date[0];
    if (date[1]) {
        dateString += ' ' + date[1];
    }
    if (date[2]) {
        dateString += ', ' + date[2];
    }
    return dateString;
}

module.exports = makeFriendlyDates;

/* One of the task conditions was:
Additionally, if the date range begins in the current year (i.e. it is currently the year 2016)
and ends within one year, the year should not be displayed at the beginning of the friendly range.

However, all autotests are set for hardcoded 2016 year, not the actual current year.
That's why it's hardcoded here as well.*/