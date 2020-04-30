import CreditCardFormatter from "../formatters/creditCard";
export default function (value) {
  const formatterObj = {
    errors: [],
    formatted: value,
    parsed: value
  };
  return CreditCardFormatter(formatterObj).formatted;
}