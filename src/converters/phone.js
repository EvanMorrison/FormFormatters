import PhoneFormatter from "../formatters/phone";

export default function(value) {
  const formatterObj = { errors: [], formatted: value, parsed: value };
  return PhoneFormatter(formatterObj).formatted;
}
