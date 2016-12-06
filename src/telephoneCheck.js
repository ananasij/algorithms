function telephoneCheck(phone) {
    var regexp = /^1?[\s|-]?(\d{3}|\(\d{3}\))[\s|-]?\d{3}[\s|-]?\d{4}$/;
    if (phone) {
        return regexp.test(phone);
    }
    return false;
}

module.exports = telephoneCheck;
