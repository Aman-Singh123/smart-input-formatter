export default function formatLicensePlate(input) {
    const cleaned = input.replace(/[^A-Z0-9]/gi, '').toUpperCase();

    // Validate the cleaned string
    const validPattern = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
    if (!validPattern.test(cleaned)) {
        return  'not a valid license plate number'; // or return null / throw error depending on your use case
    }

    const stateCode = cleaned.slice(0, 2);
    const districtCode = cleaned.slice(2, 4);
    const series = cleaned.slice(4, 6);
    const number = cleaned.slice(6);

    return `${stateCode} ${districtCode} ${series} ${number}`;
}
