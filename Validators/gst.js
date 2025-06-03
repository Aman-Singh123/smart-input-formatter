module.exports =  function validateGST(gst) {
    if (typeof gst !== 'string') return false;
    const str = gst.trim().toUpperCase();

    // GST format: 2 digits (state code), 10 char PAN, 1 char entity code, 1 char Z by default, 1 checksum char
    const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/;
    if (!regex.test(str)) return false;

    return true;
};

