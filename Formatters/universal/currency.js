export default   function formatCurrency(amount, currency = 'INR', locale = 'en-IN') {
    if (typeof amount !== 'number') {
        amount = parseFloat(amount);
    }

    if (isNaN(amount)) return 'Invalid amount';

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
    }).format(amount);
}
