import PhoneStringFormatter from "../formatters/phoneString";

export default function(value) {
  const formatterObj = { errors: [], formatted: value, parsed: value };
  return PhoneStringFormatter(formatterObj).formatted;
}
