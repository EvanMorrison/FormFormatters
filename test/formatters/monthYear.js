import { MonthYearFormatter } from "../../src";
import test from "ava";

test("converts null", t => {
  t.deepEqual(MonthYearFormatter({ errors: [], valid: true, formatted: null, parsed: null }), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("returns an error if required", t => {
  t.deepEqual(MonthYearFormatter({ errors: [], valid: true, formatted: "", parsed: "" }), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("does not return an error if not required", t => {
  t.deepEqual(MonthYearFormatter({ errors: [], valid: true, formatted: "", parsed: "" }), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("converts number", t => {
  t.deepEqual(MonthYearFormatter({ errors: [], valid: true, formatted: 23, parsed: 23 }), {
    errors: [],
    formatted: "Jan 2023",
    parsed: "2023-01-01",
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(MonthYearFormatter({ errors: [], valid: true, formatted: " 1112223333 ", parsed: " 1112223333 " }), {
    errors: [],
    formatted: "Nov 2233",
    parsed: "2233-11-12",
    valid: true
  });
});

test("formats dates", t => {
  t.deepEqual(MonthYearFormatter({ errors: [], valid: true, formatted: "5-5-14", parsed: "5-5-14" }), {
    errors: [],
    formatted: "May 2014",
    parsed: "2014-05-05",
    valid: true
  });
});

test("formats MMDDYYYY", t => {
  t.deepEqual(MonthYearFormatter({ errors: [], valid: true, formatted: "05052014", parsed: "05052014" }), {
    errors: [],
    formatted: "May 2014",
    parsed: "2014-05-05",
    valid: true
  });
});

test("formats MMM YYYY", t => {
  t.deepEqual(MonthYearFormatter({ errors: [], valid: true, formatted: "May 2014", parsed: "May 2014" }), {
    errors: [],
    formatted: "May 2014",
    parsed: "2014-05-01",
    valid: true
  });
});

test("formats MMM DD YYYY", t => {
  t.deepEqual(MonthYearFormatter({ errors: [], valid: true, formatted: "May 5 2014", parsed: "May 5 2014" }), {
    errors: [],
    formatted: "May 2014",
    parsed: "2014-05-05",
    valid: true
  });
});

test("formats MMM DD YYYY h:mm", t => {
  t.deepEqual(MonthYearFormatter({ errors: [], valid: true, formatted: "May 5 2014 12:00", parsed: "May 5 2014 12:00" }), {
    errors: [],
    formatted: "May 2014",
    parsed: "2014-05-05",
    valid: true
  });
});

test("does not handle errors", t => {
  t.deepEqual(MonthYearFormatter({ errors: [], valid: true, formatted: "abc", parsed: "abc" }), {
    errors: ["FormFormatters.dateInvalid"],
    formatted: "abc",
    parsed: "abc",
    valid: false
  });
});
