import { isNil } from "lodash";
export default function ({
  errors,
  formatted: value,
  parsed
}) {
  let formatted = value;

  if (!isNil(value) && value !== "") {
    parsed = parsed.toString().replace(/\D/g, "");

    if (/^3[47]/.test(parsed)) {
      formatted = parsed.replace(/^(\d{4})(\d{6})(\d{5})$/, "$1 $2 $3");

      if (parsed.length !== 15) {
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.amexCreditCardInvalid");
      }
    } else {
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
    parsed,
    formatted,
    errors
  };
}