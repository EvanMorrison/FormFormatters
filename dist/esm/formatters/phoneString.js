import { isNil } from "lodash";
export default function ({
  errors,
  formatted: value,
  parsed
}) {
  let formatted = value;

  if (!isNil(value) && value !== "") {
    const sanitized = value.toString().replace(/\D/g, "");
    formatted = sanitized.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    parsed = formatted;

    if (parsed.length !== 14) {
      parsed = value;
      formatted = value;
      errors.push("FormFormatters.phoneInvalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed,
    formatted,
    errors
  };
}
;