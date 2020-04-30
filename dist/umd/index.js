(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("moment"), require("numeral"));
	else if(typeof define === 'function' && define.amd)
		define([, "moment", "numeral"], factory);
	else if(typeof exports === 'object')
		exports["form-formatters"] = factory(require("lodash"), require("moment"), require("numeral"));
	else
		root["form-formatters"] = factory(root["_"], root["moment"], root["numeral"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_numeral__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/converters/creditCard.js":
/*!**************************************!*\
  !*** ./src/converters/creditCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatters_creditCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatters/creditCard */ "./src/formatters/creditCard.js");

/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  var formatterObj = {
    errors: [],
    formatted: value,
    parsed: value
  };
  return Object(_formatters_creditCard__WEBPACK_IMPORTED_MODULE_0__["default"])(formatterObj).formatted;
});

/***/ }),

/***/ "./src/converters/currency.js":
/*!************************************!*\
  !*** ./src/converters/currency.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatters_currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatters/currency */ "./src/formatters/currency.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(value)) {
    value = value.toString();
  }

  var formatterObj = {
    errors: [],
    formatted: value,
    parsed: value
  };
  return Object(_formatters_currency__WEBPACK_IMPORTED_MODULE_0__["default"])(formatterObj).formatted;
});

/***/ }),

/***/ "./src/converters/date.js":
/*!********************************!*\
  !*** ./src/converters/date.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(value) && value !== "") {
    var temp = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(value).utc();

    if (temp.isValid()) {
      value = temp.clone().format("MMM D, YYYY");
    }
  }

  return value;
});

/***/ }),

/***/ "./src/converters/hex.js":
/*!*******************************!*\
  !*** ./src/converters/hex.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatters_hex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatters/hex */ "./src/formatters/hex.js");

/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  var formatterObj = {
    errors: [],
    formatted: value,
    parsed: value
  };
  return Object(_formatters_hex__WEBPACK_IMPORTED_MODULE_0__["default"])(formatterObj).formatted;
});

/***/ }),

/***/ "./src/converters/percent.js":
/*!***********************************!*\
  !*** ./src/converters/percent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatters_percent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatters/percent */ "./src/formatters/percent.js");

/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  var formatterObj = {
    errors: [],
    formatted: value,
    parsed: value
  };
  return Object(_formatters_percent__WEBPACK_IMPORTED_MODULE_0__["default"])(formatterObj).formatted;
});

/***/ }),

/***/ "./src/converters/phone.js":
/*!*********************************!*\
  !*** ./src/converters/phone.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatters_phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatters/phone */ "./src/formatters/phone.js");

/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  var formatterObj = {
    errors: [],
    formatted: value,
    parsed: value
  };
  return Object(_formatters_phone__WEBPACK_IMPORTED_MODULE_0__["default"])(formatterObj).formatted;
});

/***/ }),

/***/ "./src/converters/phoneString.js":
/*!***************************************!*\
  !*** ./src/converters/phoneString.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatters_phoneString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatters/phoneString */ "./src/formatters/phoneString.js");

/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  var formatterObj = {
    errors: [],
    formatted: value,
    parsed: value
  };
  return Object(_formatters_phoneString__WEBPACK_IMPORTED_MODULE_0__["default"])(formatterObj).formatted;
});

/***/ }),

/***/ "./src/converters/ssn.js":
/*!*******************************!*\
  !*** ./src/converters/ssn.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatters_ssn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formatters/ssn */ "./src/formatters/ssn.js");

/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  var formatterObj = {
    errors: [],
    formatted: value,
    parsed: value
  };
  return Object(_formatters_ssn__WEBPACK_IMPORTED_MODULE_0__["default"])(formatterObj).formatted;
});

/***/ }),

/***/ "./src/formatters/array.js":
/*!*********************************!*\
  !*** ./src/formatters/array.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return value;
});

/***/ }),

/***/ "./src/formatters/creditCard.js":
/*!**************************************!*\
  !*** ./src/formatters/creditCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;
  var formatted = value;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) && value !== "") {
    parsed = parsed.toString().replace(/\D/g, "");

    if (/^3[47]/.test(parsed)) {
      formatted = parsed.replace(/^(\d{4})(\d{6})(\d{5})$/, "$1 $2 $3");

      if (parsed.length !== 15) {
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.amexCreditCardInvalid");
      }
    } else {
      formatted = parsed.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1 $2 $3 $4");

      if (parsed.length !== 16) {
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.creditCardInvalid");
      }
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});

/***/ }),

/***/ "./src/formatters/currency.js":
/*!************************************!*\
  !*** ./src/formatters/currency.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "numeral");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;
  var formatted = value;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(value) && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(value)) {
    var numObj = numeral__WEBPACK_IMPORTED_MODULE_0___default()(parsed.replace(/[$\s,]/g, "").trim());
    parsed = numObj.value();

    if (typeof parsed === "undefined" || parsed === null || isNaN(parsed)) {
      parsed = value;
      errors.push("FormFormatters.numberInvalid");
    } else {
      formatted = numObj.format("0,0.00");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});

/***/ }),

/***/ "./src/formatters/date.js":
/*!********************************!*\
  !*** ./src/formatters/date.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date */ "./src/utils/date.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(formatted) && formatted !== "") {
    var temp = _utils_date__WEBPACK_IMPORTED_MODULE_0__["default"].parse(formatted);

    if (temp.isValid()) {
      parsed = temp.clone().unix();
      formatted = temp.clone().format("MMM D, YYYY");
    } else {
      errors.push("FormFormatters.dateInvalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});

/***/ }),

/***/ "./src/formatters/email.js":
/*!*********************************!*\
  !*** ./src/formatters/email.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;
  var formatted = value;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) && value !== "") {
    parsed = parsed.toString().toLowerCase().trim();
    formatted = formatted.toString().toLowerCase().trim();

    if (!/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/.test(formatted)) {
      errors.push("FormFormatters.emailInvalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});

/***/ }),

/***/ "./src/formatters/en.js":
/*!******************************!*\
  !*** ./src/formatters/en.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  amexCreditCardInvalid: "invalid amex credit card number",
  creditCardInvalid: "invalid credit card number",
  dateInvalid: "invalid date",
  decimalInvalid: "invalid decimal",
  emailInvalid: "invalid email",
  hexInvalid: "invalid hex code",
  last4Invalid: "invalid SSN Last 4",
  numberInvalid: "invalid number",
  phoneInvalid: "invalid phone number",
  required: "is required",
  rgbInvalid: "invalid RGB color",
  ssnInvalid: "invalid ssn",
  timeInvalid: "invalid time"
});

/***/ }),

/***/ "./src/formatters/hex.js":
/*!*******************************!*\
  !*** ./src/formatters/hex.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(formatted) && formatted !== "") {
    parsed = parsed.toString().toUpperCase().trim();
    formatted = formatted.toString().toUpperCase().trim();

    if (/^(#([0-9a-fA-F]{2}){3}|([0-9a-fA-F]{2}){3})$/.test(formatted)) {
      if (parsed.length === 6 && parsed[0] !== "#") {
        parsed = "#" + parsed;
        formatted = "#" + formatted;
      }

      if (parsed.length !== 7) {
        errors.push("FormFormatters.hexInvalid");
      }
    } else {
      errors.push("FormFormatters.hexInvalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});

/***/ }),

/***/ "./src/formatters/monthYear.js":
/*!*************************************!*\
  !*** ./src/formatters/monthYear.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date */ "./src/utils/date.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(formatted) && formatted !== "") {
    var temp = _utils_date__WEBPACK_IMPORTED_MODULE_0__["default"].parse(parsed);

    if (temp.isValid()) {
      parsed = temp.format("YYYY-MM-DD");
      formatted = temp.format("MMM YYYY");
    } else {
      errors.push("FormFormatters.dateInvalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});
;

/***/ }),

/***/ "./src/formatters/name.js":
/*!********************************!*\
  !*** ./src/formatters/name.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(formatted) && formatted !== "") {
    parsed = parsed.toString().toLowerCase().trim();
    formatted = formatted.toString().toLowerCase().trim();
    var arr = parsed.split(" ").map(function (item) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
    parsed = arr.join(" ");
    formatted = parsed;
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});
;

/***/ }),

/***/ "./src/formatters/number.js":
/*!**********************************!*\
  !*** ./src/formatters/number.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "numeral");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;
  var formatted = value;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(value) && value !== "") {
    parsed = numeral__WEBPACK_IMPORTED_MODULE_0___default()(parsed.toString().replace(/[$\s,]/g, "").trim()).value();

    if (typeof parsed === "undefined" || parsed === null || isNaN(parsed)) {
      parsed = value;
      errors.push("FormFormatters.numberInvalid");
    } else {
      formatted = parsed.toString();
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});

/***/ }),

/***/ "./src/formatters/percent.js":
/*!***********************************!*\
  !*** ./src/formatters/percent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "numeral");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;
  var formatted = value;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(value) && value !== "") {
    var numObj = numeral__WEBPACK_IMPORTED_MODULE_0___default()(parsed.toString().replace(/[$\s,%]/g, "").trim());
    parsed = numObj.value();

    if (typeof parsed === "undefined" || parsed === null || isNaN(parsed)) {
      parsed = value;
      errors.push("FormFormatters.numberInvalid");
    } else {
      if (parsed % 1 === 0) {
        formatted = numObj.format("0,0") + "%";
      } else {
        formatted = numObj.format("0,0.00") + "%";
      }
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});
;

/***/ }),

/***/ "./src/formatters/phone.js":
/*!*********************************!*\
  !*** ./src/formatters/phone.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;
  var formatted = value;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) && value !== "") {
    parsed = parsed.toString().replace(/\D/g, "");
    formatted = parsed.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

    if (parsed.length !== 10) {
      parsed = value;
      formatted = value;
      errors.push("FormFormatters.phoneInvalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});
;

/***/ }),

/***/ "./src/formatters/phoneString.js":
/*!***************************************!*\
  !*** ./src/formatters/phoneString.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;
  var formatted = value;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) && value !== "") {
    var sanitized = value.toString().replace(/\D/g, "");
    parsed = sanitized.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    formatted = sanitized.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

    if (parsed.length !== 12) {
      parsed = value;
      formatted = value;
      errors.push("FormFormatters.phoneInvalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});
;

/***/ }),

/***/ "./src/formatters/required.js":
/*!************************************!*\
  !*** ./src/formatters/required.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed,
      valid = _ref.valid;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(formatted) || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(formatted) && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(formatted) || formatted === "" || formatted === false) {
    errors.push("FormFormatters.required");
  }

  return {
    valid: errors.length === 0,
    formatted: formatted,
    parsed: parsed,
    errors: errors
  };
});

/***/ }),

/***/ "./src/formatters/rgb.js":
/*!*******************************!*\
  !*** ./src/formatters/rgb.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "numeral");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;
  var formatted = value;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(value) && value !== "") {
    parsed = numeral__WEBPACK_IMPORTED_MODULE_0___default()(parsed.toString().trim()).value();

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(parsed) || isNaN(parsed)) {
      parsed = value;
    } else if (parsed > 255 || parsed < 0) {
      parsed = value;
      errors.push("FormFormatters.rgbInvalid");
    } else {
      formatted = parsed;
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});
;

/***/ }),

/***/ "./src/formatters/ssn.js":
/*!*******************************!*\
  !*** ./src/formatters/ssn.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;
  var formatted = value;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) && value !== "") {
    parsed = parsed.toString().replace(/\D/g, "");
    formatted = parsed.replace(/^(\d{3})(\d{2})(\d{4})$/, "$1-$2-$3");

    if (parsed.length !== 9) {
      parsed = value;
      formatted = value;
      errors.push("FormFormatters.ssnInvalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});
;

/***/ }),

/***/ "./src/formatters/ssnLastFour.js":
/*!***************************************!*\
  !*** ./src/formatters/ssnLastFour.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;
  var formatted = value;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) && value !== "") {
    parsed = parsed.toString().replace(/\D/g, "").trim();
    formatted = parsed;

    if (parsed.length !== 4) {
      parsed = value;
      formatted = value;
      errors.push("FormFormatters.last4Invalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});
;

/***/ }),

/***/ "./src/formatters/string.js":
/*!**********************************!*\
  !*** ./src/formatters/string.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(formatted)) {
    formatted = formatted.toString();
  }

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(formatted) && formatted !== "") {
    formatted = formatted.toString().trim();
    parsed = formatted;
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});
;

/***/ }),

/***/ "./src/formatters/time.js":
/*!********************************!*\
  !*** ./src/formatters/time.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(formatted) && formatted !== "") {
    var temp = moment__WEBPACK_IMPORTED_MODULE_0___default()(parsed, "hh:mm:ss a");

    if (temp.isValid()) {
      formatted = temp.format("h:mm a");
      parsed = formatted;
    } else {
      errors.push("FormFormatters.timeInvalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});
;

/***/ }),

/***/ "./src/formatters/whole.js":
/*!*********************************!*\
  !*** ./src/formatters/whole.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! numeral */ "numeral");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;
  var formatted = value;

  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"])(value) && value !== "") {
    parsed = numeral__WEBPACK_IMPORTED_MODULE_0___default()(parsed.replace(/[$\s,]/g, "").trim()).value();

    if (typeof parsed === "undefined" || parsed === null || isNaN(parsed)) {
      parsed = value;
      errors.push("FormFormatters.numberInvalid");
    } else {
      parsed = Math.round(parsed);
      formatted = parsed.toString();
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
});
;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: ArrayFormatter, ArrayMask, CreditCardConverter, CreditCardFormatter, CreditCardMask, CurrencyConverter, CurrencyFormatter, CurrencyMask, DateConverter, DateFormatter, DecimalMask, EmailFormatter, EmailMask, EnglishTranslation, HexConverter, HexFormatter, HexMask, MonthYearFormatter, NameFormatter, NumberFormatter, NumberMask, PercentConverter, PercentFormatter, PercentMask, PhoneConverter, PhoneFormatter, PhoneMask, PhoneStringConverter, PhoneStringFormatter, PhoneStringMask, RequiredFormatter, RgbFormatter, SsnConverter, SsnFormatter, SsnMask, SsnLastFourFormatter, SsnLastFourMask, StringFormatter, StringMask, TimeFormatter, TimeMask, WholeNumberFormatter, WholeNumberMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatters_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatters/array */ "./src/formatters/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayFormatter", function() { return _formatters_array__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _masks_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masks/array */ "./src/masks/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayMask", function() { return _masks_array__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _converters_creditCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converters/creditCard */ "./src/converters/creditCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreditCardConverter", function() { return _converters_creditCard__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _formatters_creditCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatters/creditCard */ "./src/formatters/creditCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreditCardFormatter", function() { return _formatters_creditCard__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _masks_creditCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masks/creditCard */ "./src/masks/creditCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreditCardMask", function() { return _masks_creditCard__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _converters_currency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./converters/currency */ "./src/converters/currency.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyConverter", function() { return _converters_currency__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _formatters_currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatters/currency */ "./src/formatters/currency.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyFormatter", function() { return _formatters_currency__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _masks_currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masks/currency */ "./src/masks/currency.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyMask", function() { return _masks_currency__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _converters_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./converters/date */ "./src/converters/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateConverter", function() { return _converters_date__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _formatters_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formatters/date */ "./src/formatters/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return _formatters_date__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _masks_decimal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masks/decimal */ "./src/masks/decimal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecimalMask", function() { return _masks_decimal__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _formatters_email__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formatters/email */ "./src/formatters/email.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailFormatter", function() { return _formatters_email__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _masks_email__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./masks/email */ "./src/masks/email.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailMask", function() { return _masks_email__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _utils_translations_en__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/translations/en */ "./src/utils/translations/en.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnglishTranslation", function() { return _utils_translations_en__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _converters_hex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./converters/hex */ "./src/converters/hex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HexConverter", function() { return _converters_hex__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _formatters_hex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formatters/hex */ "./src/formatters/hex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HexFormatter", function() { return _formatters_hex__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _masks_hex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./masks/hex */ "./src/masks/hex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HexMask", function() { return _masks_hex__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _formatters_monthYear__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formatters/monthYear */ "./src/formatters/monthYear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthYearFormatter", function() { return _formatters_monthYear__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _formatters_name__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formatters/name */ "./src/formatters/name.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NameFormatter", function() { return _formatters_name__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _formatters_number__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formatters/number */ "./src/formatters/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberFormatter", function() { return _formatters_number__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _masks_number__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./masks/number */ "./src/masks/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberMask", function() { return _masks_number__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _converters_percent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./converters/percent */ "./src/converters/percent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentConverter", function() { return _converters_percent__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _formatters_percent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./formatters/percent */ "./src/formatters/percent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentFormatter", function() { return _formatters_percent__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _masks_percent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./masks/percent */ "./src/masks/percent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PercentMask", function() { return _masks_percent__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _converters_phone__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./converters/phone */ "./src/converters/phone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneConverter", function() { return _converters_phone__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _formatters_phone__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./formatters/phone */ "./src/formatters/phone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneFormatter", function() { return _formatters_phone__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _masks_phone__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./masks/phone */ "./src/masks/phone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneMask", function() { return _masks_phone__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _converters_phoneString__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./converters/phoneString */ "./src/converters/phoneString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneStringConverter", function() { return _converters_phoneString__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _formatters_phoneString__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./formatters/phoneString */ "./src/formatters/phoneString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneStringFormatter", function() { return _formatters_phoneString__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _masks_phoneString__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./masks/phoneString */ "./src/masks/phoneString.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneStringMask", function() { return _masks_phoneString__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _formatters_required__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./formatters/required */ "./src/formatters/required.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequiredFormatter", function() { return _formatters_required__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _formatters_rgb__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./formatters/rgb */ "./src/formatters/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RgbFormatter", function() { return _formatters_rgb__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _converters_ssn__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./converters/ssn */ "./src/converters/ssn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SsnConverter", function() { return _converters_ssn__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _formatters_ssn__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./formatters/ssn */ "./src/formatters/ssn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SsnFormatter", function() { return _formatters_ssn__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _masks_ssn__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./masks/ssn */ "./src/masks/ssn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SsnMask", function() { return _masks_ssn__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _formatters_ssnLastFour__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./formatters/ssnLastFour */ "./src/formatters/ssnLastFour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SsnLastFourFormatter", function() { return _formatters_ssnLastFour__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _masks_ssnLastFour__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./masks/ssnLastFour */ "./src/masks/ssnLastFour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SsnLastFourMask", function() { return _masks_ssnLastFour__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _formatters_string__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./formatters/string */ "./src/formatters/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormatter", function() { return _formatters_string__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _masks_string__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./masks/string */ "./src/masks/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringMask", function() { return _masks_string__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _formatters_time__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./formatters/time */ "./src/formatters/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeFormatter", function() { return _formatters_time__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _masks_time__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./masks/time */ "./src/masks/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeMask", function() { return _masks_time__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _formatters_whole__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./formatters/whole */ "./src/formatters/whole.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WholeNumberFormatter", function() { return _formatters_whole__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _masks_wholeNumber__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./masks/wholeNumber */ "./src/masks/wholeNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WholeNumberMask", function() { return _masks_wholeNumber__WEBPACK_IMPORTED_MODULE_42__["default"]; });













































/***/ }),

/***/ "./src/masks/array.js":
/*!****************************!*\
  !*** ./src/masks/array.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return value;
  }
});

/***/ }),

/***/ "./src/masks/creditCard.js":
/*!*********************************!*\
  !*** ./src/masks/creditCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().replace(/[^0-9-\s]+/g, "");
  }
});

/***/ }),

/***/ "./src/masks/currency.js":
/*!*******************************!*\
  !*** ./src/masks/currency.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().replace(/[^0-9.,]/g, "");
  }
});

/***/ }),

/***/ "./src/masks/decimal.js":
/*!******************************!*\
  !*** ./src/masks/decimal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().replace(/[^0-9,.]+/g, "");
  }
});

/***/ }),

/***/ "./src/masks/email.js":
/*!****************************!*\
  !*** ./src/masks/email.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().toLowerCase();
  }
});

/***/ }),

/***/ "./src/masks/hex.js":
/*!**************************!*\
  !*** ./src/masks/hex.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().toUpperCase().replace(/[^#A-F0-9]+/g, "");
  }
});

/***/ }),

/***/ "./src/masks/number.js":
/*!*****************************!*\
  !*** ./src/masks/number.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().replace(/[^0-9,.]+/g, "");
  }
});

/***/ }),

/***/ "./src/masks/percent.js":
/*!******************************!*\
  !*** ./src/masks/percent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().replace(/[^0-9.%]+/g, "");
  }
});

/***/ }),

/***/ "./src/masks/phone.js":
/*!****************************!*\
  !*** ./src/masks/phone.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().replace(/[^0-9()-\s]+/g, "");
  }
});

/***/ }),

/***/ "./src/masks/phoneString.js":
/*!**********************************!*\
  !*** ./src/masks/phoneString.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().replace(/[^0-9()-\s]+/g, "");
  }
});

/***/ }),

/***/ "./src/masks/ssn.js":
/*!**************************!*\
  !*** ./src/masks/ssn.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().replace(/[^0-9-\s]+/g, "");
  }
});

/***/ }),

/***/ "./src/masks/ssnLastFour.js":
/*!**********************************!*\
  !*** ./src/masks/ssnLastFour.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().replace(/[^0-9]+/g, "");
  }
});

/***/ }),

/***/ "./src/masks/string.js":
/*!*****************************!*\
  !*** ./src/masks/string.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return value;
  }
});

/***/ }),

/***/ "./src/masks/time.js":
/*!***************************!*\
  !*** ./src/masks/time.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return value;
  }
});

/***/ }),

/***/ "./src/masks/wholeNumber.js":
/*!**********************************!*\
  !*** ./src/masks/wholeNumber.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  mask: function mask(value) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(value) ? null : value.toString().replace(/[^0-9,]+/g, "");
  }
});

/***/ }),

/***/ "./src/utils/date.js":
/*!***************************!*\
  !*** ./src/utils/date.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  parse: function parse(date) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default.a.utc(date, ["MMDDYYYY", "MMM YYYY", "MMM DD YYYY", "M-D-YYYY", "YYYY-M-D", "YYYY-MM-DD h:mm a", "MMM DD YYYY h:mm a", "M-D-YYYY h:mm a", "YYYY-MM-DD h:mm a", "YYYY-MM-DD h:mm:ss a", "MMM DD YYYY h:mm:ss a", "M-D-YYYY h:mm:ss a", "YYYY-MM-DD h:mm:ss a"]);
  }
});

/***/ }),

/***/ "./src/utils/translations/en.js":
/*!**************************************!*\
  !*** ./src/utils/translations/en.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatters_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../formatters/en */ "./src/formatters/en.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  FormFormatters: _formatters_en__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "lodash":
/*!**********************************************************************!*\
  !*** external {"commonjs2":"lodash","commonjs":"lodash","root":"_"} ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ }),

/***/ "numeral":
/*!**************************!*\
  !*** external "numeral" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_numeral__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map