const formatCurrency = require('./universal/currency')
const formatCreditCard = require('./universal/creditcard')
const formatAadhaar = require('./india/phone')
const formatLicensePlate = require('./india/licence-plate')
const formatPhoneIN = require('./india/phone')

module.exports = {
    formatPhoneIN,
    formatLicensePlate,
    formatAadhaar,
    formatCreditCard,
    formatCurrency
}
