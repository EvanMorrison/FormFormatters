import { isNil } from "lodash";

export default function(value) {
  return(isNil(value) ? null : value.toString().toLowerCase());
}
