const StringMask = {
  mask(value, options = {}) {
    return(value.replace(/[^0-9-\s]+/g, ""));
  }
};

module.exports = StringMask;
