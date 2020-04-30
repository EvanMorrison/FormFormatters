import { isNil } from "lodash";

export default function(value) {
  return(isNil(value) ? null : value.toString().toUpperCase().replace(/[^#A-F0-9]+/g, ""));
}
