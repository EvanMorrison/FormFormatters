import { isNil } from "lodash";
export default {
  mask(value) {
    return isNil(value) ? null : value.toString().toLowerCase();
  }

};