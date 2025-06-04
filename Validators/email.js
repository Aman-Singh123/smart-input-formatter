export default function validateEmail(email) {
    if (typeof email !== 'string') return false;
    const str = email.trim();

    // Basic RFC 5322 simplified regex for email format
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    if (!regex.test(str)) return false;

    // Additional checks:

    // 1. No consecutive dots in local or domain parts
    const [local, domain] = str.split('@');
    if (local.includes('..') || domain.includes('..')) return false;

    // 2. Local part cannot start or end with dot
    if (local.startsWith('.') || local.endsWith('.')) return false;

    // 3. Domain part cannot start or end with hyphen or dot
    if (domain.startsWith('-') || domain.endsWith('-')) return false;
    if (domain.startsWith('.') || domain.endsWith('.')) return false;

    // 4. Domain labels (parts between dots) cannot start or end with hyphen
    const domainLabels = domain.split('.');
    if (domainLabels.some(label => label.startsWith('-') || label.endsWith('-'))) return false;

    return true;
};

