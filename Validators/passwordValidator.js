module.exports = function validateStrongPassword(password, minLength = 8) {
    if (typeof password !== 'string') return false;
    if (password.length < minLength) return false;

    // Must contain at least one lowercase, one uppercase, one number, and one special character
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])/;
    return pattern.test(password);
}

