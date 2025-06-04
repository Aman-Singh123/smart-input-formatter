module.exports = function formatCreditCard(input) {
    const digits = input.replace(/\D/g, '');

    // Handle American Express (15 digits, format 4-6-5)
    if (/^3[47]\d{13}$/.test(digits)) {
        return `${digits.slice(0, 4)} ${digits.slice(4, 10)} ${digits.slice(10)}`;
    }

    // Handle Diners Club (14 digits, format 4-6-4)
    if (/^3(?:0[0-5]|[68]\d)\d{11}$/.test(digits)) {
        return `${digits.slice(0, 4)} ${digits.slice(4, 10)} ${digits.slice(10)}`;
    }

    // Handle standard 16-digit cards (Visa, MasterCard, Discover, etc.) → format 4-4-4-4
    if (/^\d{16}$/.test(digits)) {
        return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    }

    // Fallback: Group in 4s for any other length up to 19
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
}
