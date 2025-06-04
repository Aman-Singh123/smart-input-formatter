var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// Validators/mobile.js
var mobile_exports = {};
__export(mobile_exports, {
  default: () => validatePhone
});
function validatePhone(number, countryCode) {
  const patterns = {
    IN: /^[6-9]\d{9}$/,
    // India
    US: /^([2-9][0-9]{2})[- ]?[2-9][0-9]{2}[- ]?[0-9]{4}$/,
    // USA
    UK: /^(?:\+44|0)7\d{3}[- ]?\d{6}$/,
    // UK
    AU: /^(\+61|0)?\s?4\d{2}[\s-]?\d{3}[\s-]?\d{3}$/,
    // Australia
    CA: /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/
    // Canada
  };
  const pattern = patterns[countryCode.toUpperCase()];
  return pattern ? pattern.test(number) : false;
}
var init_mobile = __esm({
  "Validators/mobile.js"() {
  }
});

// Validators/aadhar.js
var aadhar_exports = {};
__export(aadhar_exports, {
  default: () => validateAadhaar
});
function validateAadhaar(aadhaar) {
  if (typeof aadhaar !== "string") return false;
  const str = aadhaar.replace(/\s+/g, "");
  if (!/^\d{12}$/.test(str)) return false;
  const d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  ];
  const p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
  ];
  const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];
  let c = 0;
  for (let i = 0; i < str.length; i++) {
    c = d[c][p[i % 8][parseInt(str.charAt(str.length - i - 1), 10)]];
  }
  return c === 0;
}
var init_aadhar = __esm({
  "Validators/aadhar.js"() {
  }
});

// src/index.js
var index_exports = {};
__export(index_exports, {
  formatAadhaar: () => formatAadhaar,
  formatCreditCard: () => formatCreditCard,
  formatCurrency: () => formatCurrency,
  formatLicensePlate: () => formatLicensePlate,
  formatPhoneIN: () => formatPhoneIN,
  validateAadhaar: () => validateAadhaar,
  validateEmail: () => validateEmail,
  validateGST: () => validateGST,
  validatePanCard: () => validatePanCard,
  validatePhone: () => validatePhone,
  validateStrongPassword: () => validateStrongPassword,
  validateZipCode: () => validateZipCode
});
module.exports = __toCommonJS(index_exports);

// Validators/email.js
function validateEmail(email) {
  if (typeof email !== "string") return false;
  const str = email.trim();
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  if (!regex.test(str)) return false;
  const [local, domain] = str.split("@");
  if (local.includes("..") || domain.includes("..")) return false;
  if (local.startsWith(".") || local.endsWith(".")) return false;
  if (domain.startsWith("-") || domain.endsWith("-")) return false;
  if (domain.startsWith(".") || domain.endsWith(".")) return false;
  const domainLabels = domain.split(".");
  if (domainLabels.some((label) => label.startsWith("-") || label.endsWith("-"))) return false;
  return true;
}

// Validators/zipcode.js
function isFakePattern(zip) {
  if (/^(\d)\1+$/.test(zip)) return true;
  const fakeSequences = ["123456", "987654", "1234", "9876"];
  if (fakeSequences.includes(zip)) return true;
  return false;
}
function validateZipCode(zip, country) {
  let regex;
  switch (country.toLowerCase()) {
    case "us":
      regex = /^\d{5}(-\d{4})?$/;
      break;
    case "canada":
      regex = /^[A-Za-z]\d[A-Za-z][ ]?\d[A-Za-z]\d$/;
      break;
    case "uk":
      regex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
      break;
    case "au":
      regex = /^\d{4}$/;
      break;
    case "in":
      regex = /^\d{6}$/;
      break;
    default:
      return false;
  }
  if (!regex.test(zip)) return false;
  if (/^\d+$/.test(zip) && isFakePattern(zip)) return false;
  return true;
}

// Validators/panCard.js
function validatePanCard(pan) {
  if (typeof pan !== "string") return false;
  const str = pan.trim().toUpperCase();
  if (str.length !== 10) return false;
  const regex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  if (!regex.test(str)) return false;
  const validStatusCodes = ["P", "C", "H", "A", "B", "G", "J", "L", "F", "T"];
  if (!validStatusCodes.includes(str[3])) return false;
  return true;
}

// src/index.js
init_mobile();

// Validators/gst.js
function validateGST(gst) {
  if (typeof gst !== "string") return false;
  const str = gst.trim().toUpperCase();
  const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/;
  if (!regex.test(str)) return false;
  return true;
}

// src/index.js
init_aadhar();

// Validators/passwordValidator.js
function validateStrongPassword(password, minLength = 8) {
  if (typeof password !== "string") return false;
  if (password.length < minLength) return false;
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])/;
  return pattern.test(password);
}

// Formatters/india/aadhar.js
var validateAadhaar2 = (init_aadhar(), __toCommonJS(aadhar_exports));
function formatAadhaar(input) {
  if (!validateAadhaar2(input)) return "invalid aadhar";
  const digits = input.replace(/\D/g, "");
  return `${digits.slice(0, 4)} ${digits.slice(4, 8)} ${digits.slice(8, 12)}`;
}

// Formatters/india/licence-plate.js
function formatLicensePlate(input) {
  const cleaned = input.replace(/[^A-Z0-9]/gi, "").toUpperCase();
  const validPattern = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
  if (!validPattern.test(cleaned)) {
    return "not a valid license plate number";
  }
  const stateCode = cleaned.slice(0, 2);
  const districtCode = cleaned.slice(2, 4);
  const series = cleaned.slice(4, 6);
  const number = cleaned.slice(6);
  return `${stateCode} ${districtCode} ${series} ${number}`;
}

// Formatters/india/phone.js
var validatePhone2 = (init_mobile(), __toCommonJS(mobile_exports));
function formatPhoneIN(input) {
  if (!validatePhone2(input, "IN")) return "invalid mobile number";
  return input.replace(/\D/g, "").replace(/(\d{5})(\d{5})/, "$1 $2");
}

// Formatters/universal/currency.js
function formatCurrency(amount, currency = "INR", locale = "en-IN") {
  if (typeof amount !== "number") {
    amount = parseFloat(amount);
  }
  if (isNaN(amount)) return "Invalid amount";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2
  }).format(amount);
}

// Formatters/universal/creditcard.js
function formatCreditCard(input) {
  const digits = input.replace(/\D/g, "");
  if (/^3[47]\d{13}$/.test(digits)) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 10)} ${digits.slice(10)}`;
  }
  if (/^3(?:0[0-5]|[68]\d)\d{11}$/.test(digits)) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 10)} ${digits.slice(10)}`;
  }
  if (/^\d{16}$/.test(digits)) {
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  }
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  formatAadhaar,
  formatCreditCard,
  formatCurrency,
  formatLicensePlate,
  formatPhoneIN,
  validateAadhaar,
  validateEmail,
  validateGST,
  validatePanCard,
  validatePhone,
  validateStrongPassword,
  validateZipCode
});
//# sourceMappingURL=index.cjs.map
