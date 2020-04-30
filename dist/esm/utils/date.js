import Moment from "moment";
export default {
  parse(date) {
    return Moment.utc(date, ["MMDDYYYY", "MMM YYYY", "MMM DD YYYY", "M-D-YYYY", "YYYY-M-D", "YYYY-MM-DD h:mm a", "MMM DD YYYY h:mm a", "M-D-YYYY h:mm a", "YYYY-MM-DD h:mm a", "YYYY-MM-DD h:mm:ss a", "MMM DD YYYY h:mm:ss a", "M-D-YYYY h:mm:ss a", "YYYY-MM-DD h:mm:ss a"]);
  }

};