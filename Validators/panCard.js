module.exports = function validatePanCard(pan) {
    if (typeof pan !== 'string' ) return false;

    const str = pan.trim().toUpperCase();

    if (str.length !== 10) return false;

    // Basic pattern check: 5 letters, 4 digits, 1 letter
    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if (!regex.test(str)) return false;

    const validStatusCodes = ['P', 'C', 'H', 'A', 'B', 'G', 'J', 'L', 'F', 'T'];
    if (!validStatusCodes.includes(str[3])) return false;

    return true;
};
