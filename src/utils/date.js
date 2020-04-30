import moment from "moment";

export default{
  parse(date) {
    const strictDate = moment.utc(date, [
      // strict dates
      "MMM D, YYYY",
      "MMMM D, YYYY",
      "MMM D, YY",
      "MMMM D, YY",
      "MMM D YYYY",
      "MMDDYYYY",
      "MMM YYYY",
      "MMM DD YYYY",
      "M-D-YYYY",
      "M-D-YY",
      "YYYY-M-D",
      "YY"
    ],
    true);
    // if the formatted date has no time, set it to the end of the day UTC
    // so the resulting parsed epoch value will be within the same day anywhere in the US/Canada.
    if(strictDate.isValid()) {
      return strictDate.endOf("day");
    }

    // if the formatted date includes a time, it should be interpreted as local time
    // then converted to UTC.
    return moment(date, [
      // date times
      "YYYY-MM-DD h:mm a",
      "MMM DD YYYY h:mm a",
      "M-D-YYYY h:mm a",
      "YYYY-MM-DD h:mm a",
      // date times with seconds
      "YYYY-MM-DD h:mm:ss a",
      "MMM DD YYYY h:mm:ss a",
      "M-D-YYYY h:mm:ss a",
      "YYYY-MM-DD h:mm:ss a"
    ]).utc();
  }
};
