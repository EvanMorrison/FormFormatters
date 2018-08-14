import date from "../utils/date";
import { isNil } from "lodash";

export default function({errors, formatted: value, parsed}) {
  let formatted = value;

  if(!isNil(value) && value !== "") {
    let temp = date.parse(parsed);
    if(temp.isValid()) {
      // store parsed value as just the date portion.
      parsed = temp.unix();
      formatted = temp.format("MMM D, YYYY");
    } else {
      errors.push("FormFormatters.dateInvalid");
    }
  }

  return({
    valid: errors.length === 0,
    parsed,
    formatted,
    errors
  });
}
