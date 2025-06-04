function isFakePattern(zip) {
    // All digits same (e.g., 000000, 1111)
    if (/^(\d)\1+$/.test(zip)) return true;

    // Known fake-like sequences
    const fakeSequences = ['123456', '987654', '1234', '9876'];
    if (fakeSequences.includes(zip)) return true;

    return false;
}

export default function validateZipCode(zip, country) {
    let regex;
    switch (country.toLowerCase()) {
        case 'us':
            regex = /^\d{5}(-\d{4})?$/;
            break;
        case 'canada':
            regex = /^[A-Za-z]\d[A-Za-z][ ]?\d[A-Za-z]\d$/;
            break;
        case 'uk':
            regex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
            break;
        case 'au':
            regex = /^\d{4}$/;
            break;
        case 'in':
            regex = /^\d{6}$/;
            break;
        default:
            return false;
    }

    // Check format
    if (!regex.test(zip)) return false;

    // Check for fake numeric patterns
    if (/^\d+$/.test(zip) && isFakePattern(zip)) return false;

    return true;
}

