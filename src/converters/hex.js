import HexFormatter from "../formatters/hex";

export default function(value) {
  const formatterObj = { errors: [], formatted: value, parsed: value };
  return HexFormatter(formatterObj).formatted;
}
