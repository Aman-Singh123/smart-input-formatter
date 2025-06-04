// validators/phone.js

module.exports = function validatePhone(number, countryCode) {
    const patterns = {
        IN: /^[6-9]\d{9}$/,                     // India
        US: /^([2-9][0-9]{2})[- ]?[2-9][0-9]{2}[- ]?[0-9]{4}$/, // USA
        UK: /^(?:\+44|0)7\d{3}[- ]?\d{6}$/,                      // UK
        AU: /^(\+61|0)?\s?4\d{2}[\s-]?\d{3}[\s-]?\d{3}$/,                // Australia
        CA: /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,  // Canada
    };

    const pattern = patterns[countryCode.toUpperCase()];
    return pattern ? pattern.test(number) : false;
}

 