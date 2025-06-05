# smart-form-utils

**Smart Form Utils** is a lightweight JavaScript library for validating and formatting user inputs such as email, phone numbers, Aadhaar, PAN, GST, IBAN, credit cards, and more.

🧩 Works in both **Node.js** and **browsers**  
🌐 Locale-aware formatting  
🛠 No dependencies  
📦 ESM + CommonJS support

---

## 📦 Installation

```bash
npm install smart-form-utils

📚 Features
✅ Email, Phone, PAN, Aadhaar, GST, ZIP, Password validators

🔄 Formatters for license plates, credit cards, etc.

🌍 Locale support (e.g., IN, US)

🔥 Works in both browser and Node.js

💡 Zero dependencies







✅ Validators
Function	Description
validateEmail	Validates email format
validatePhone	Validates phone number by locale
validateAadhaar	Validates Indian Aadhaar number
validatePAN	Validates Indian PAN number
validateGSTIN	Validates Indian GST number
validateIBAN	Validates IBAN
validateCreditCard	Validates credit card number

🧪 Examples
js
Copy
Edit
validateEmail('test@example.com'); // true
validateAadhaar('123412341234');   // true
validatePAN('ABCDE1234F');         // true
validateGSTIN('27AAPFU0939F1ZV');  // true
validateCreditCard('4111111111111111'); // true

📦 Formatters — India
Function	Description
formatLicensePlate	Formats Indian vehicle numbers (e.g., MH12 AB 1234)
formatPhoneNumber	Formats Indian mobile numbers as +91 XXXXX-XXXXX
formatAadhaar       Formats Indian Aadhar number as ( e.g , 9999 0000 9999 0000 )




🌐 Formatters — Universal
Function	Description
formatCreditCard	Formats 16-digit credit card numbers with spaces
formatCurrency	Formats numbers to currency (INR, USD, etc.) using Intl


🔧 Usage

ES Module

import { validateEmail, validatePhone } from 'smart-form-utils';

console.log(validateEmail('john.doe@example.com')); // true
console.log(validatePhone('9876543210', 'IN'));     // true



CommonJS

const { validateEmail, validatePhone } = require('smart-form-utils');

console.log(validateEmail('john.doe@example.com')); // true

