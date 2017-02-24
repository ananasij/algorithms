function checkCashRegister(price, cash, cid) {
    var currencyCent = {
        'ONE HUNDRED': 10000,
        'TWENTY': 2000,
        'TEN': 1000,
        'FIVE': 500,
        'ONE': 100,
        'QUARTER': 25,
        'DIME': 10,
        'NICKEL': 5,
        'PENNY': 1
    };
    var currencyKeys = Object.keys(currencyCent);
    var changeDueCent = (cash - price) * 100;
    var changeStructured = [];
    if (changeDueCent === cidTotalCent(cid)) {
        return 'Closed';
    }

    for (var i = 0; i < currencyKeys.length; i += 1) {
        var key = currencyKeys[i];
        var amountCent = changeDueCent - (changeDueCent % currencyCent[key]);
        var chargedFromCidCent = chargeCID(key, amountCent, cid);
        if (chargedFromCidCent === false) {
            return 'Insufficient Funds';
        }
        if (changeDueCent >= currencyCent[key]) {
            changeStructured.push([key, chargedFromCidCent / 100]);
            changeDueCent -= chargedFromCidCent;
        }
    }
    return changeStructured;
}

function chargeCID(currency, dueCent, cid) {
    for (var i = 0; i < cid.length; i += 1) {
        if (cid[i][0] === currency) {
            if (cid[i][1] >= dueCent / 100) {
                return dueCent;
            } else if (currency === 'PENNY') {
                return false;
            }
            return cid[i][1] * 100;
        }
    }
    return false;
}

function cidTotalCent(cid) {
    var total = 0;
    for (var i = 0; i < cid.length; i += 1) {
        total += cid[i][1] * 100;
    }
    return total;
}

module.exports = checkCashRegister;
