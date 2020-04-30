import { isNil } from "lodash";
export default function (value) {
  return isNil(value) ? null : value.toString().replace(/[^0-9.,]/g, "");
}