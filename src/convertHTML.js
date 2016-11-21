function convertHTML(str) {
    var converted = str;
    var toReplace = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };
    var filter;

    for (var key in toReplace) {
        filter = new RegExp(key, 'g');
        converted = converted.replace(filter, toReplace[key]);
    }

    return converted;
}

module.exports = convertHTML;
