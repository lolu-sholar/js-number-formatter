import numberFormat from 'js-number-formatter';

const value = '-00034.dj^nkjls.d$knls.4h%bj345';

const options = {
  // Returns zero '0' if string contains no digits
  // default: true, [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true: -34.4345 | false: -34.4345]
  opReturnZeroIfNoDigit: true,
  // Return the absolute number without possible preceeding zeros '0'
  // default: true, [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true: -34.4345 | false: -00,034.4345]
  opReturnAbsoluteNumber: true,
  // Allows sign (-) if true, removes any present sign if false
  // default: true [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true = -34.4345 | false = 34.4345]
  opAllowSign: true, 
  // If decimal should be allowed or not
  // default: true [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true = -34.4345 | false = -34]
  opAllowDecimal: true,
  // Forces decimal even if string contains no decimal points (but only if opAllowDecimal is true)
  // default: true [test: '-00034dj^nkjlsd$knls4h%bj345' | true: -344,345.00 | false: -344,345]
  opForceDecimal: true, 
  // Ignores any already existing decimal point in the string (very useful for formatting number in input field)
  // default: false
  opIgnoreDecimal: true, 
  // Appends zero '0' to result if just one digit is found after the last decimal point
  // default: true [test: '-00034dj^nkjlsd$knls4h%bj34.5' | true: -34,434.50 | false: -34,434.5]
  opAppendZeroToDecimal: true,
  // Character to use im place of the decimal period symbol
  // default: '.'
  opDecimalDelimiterChar: '.',
  // Thousands separator
  // default: ','
  opDelimiterChar: ',',
  // Thousands character spacing with ' '
  // default: false [test: '-00034dj^nkjlsd$knls4h%bj.34.5' | true: -34, 434.50 | false: -34,434.50]
  opAddSpaceToDelimiter: true
};

numberFormat(value, options);