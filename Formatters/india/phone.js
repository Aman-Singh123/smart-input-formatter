const validatePhone = require('../../Validators/mobile')

export default  function formatPhoneIN(input) {
    if (!validatePhone(input, 'IN')) return 'invalid mobile number'
    return input.replace(/\D/g, '').replace(/(\d{5})(\d{5})/, '$1 $2');
}
