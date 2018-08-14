"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;

  var formatted = value;

  if (!(0, _lodash.isNil)(value) && value !== "") {
    // remove all non-digits
    parsed = parsed.toString().replace(/\D/g, "");
    // AMEX CHECK - if first two numbers are 34 or 37
    if (/^3[47]/.test(parsed)) {
      formatted = parsed.replace(/^(\d{4})(\d{6})(\d{5})$/, "$1 $2 $3");
      if (parsed.length !== 15) {
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.amexCreditCardInvalid");
      }
    } else {
      // ALL OTHER CREDIT CARDS
      formatted = parsed.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1 $2 $3 $4");
      if (parsed.length !== 16) {
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.creditCardInvalid");
      }
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
};

var _lodash = require("lodash");