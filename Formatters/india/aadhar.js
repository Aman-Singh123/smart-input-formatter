const validateAadhaar = require('../../Validators/aadhar')

module.exports = function formatAadhaar(input) {
    if (!validateAadhaar(input)) return 'invalid aadhar' ; // or return null/error
    const digits = input.replace(/\D/g, '');
    return `${digits.slice(0, 4)} ${digits.slice(4, 8)} ${digits.slice(8, 12)}`;
}
