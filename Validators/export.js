const validateEmail = require('./email')
const validateAadhaar = require('./aadhar')
const validateGST = require('./gst')
const validatePhone = require('./mobile')
const validatePanCard = require('./panCard')
const validateStrongPassword = require('./passwordValidator')
const validateZipCode = require('./zipcode')


module.exports = {
    validateEmail,
    validateAadhaar,
    validateGST,
    validatePanCard,
    validatePhone,
    validateStrongPassword,
    validateZipCode
}
