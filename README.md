# Number Formatter
A javascript module that scans through string to remove non-numerals and formats out any found numbers based on configuration passed to it.

# Setup
```javascript
npm install js-number-formatter
```

# Usage
```javascript
const { JS_NumberFormat } = require('js-number-formatter')

JS_NumberFormat(value, options)
```

# Examples
```javascript
JS_NumberFormat(3892) // Result: 3,892.00

JS_NumberFormat('140hajs7') // Result: 1,407.00

JS_NumberFormat("you can't be serious ...") // Result: 0

JS_NumberFormat("Hello World 20-06-2019", {
  op_AllowSign: false
}) // Result: 20,062,019.00

JS_NumberFormat('-00034dj^nkjlsd$knls4h%bj.34.5', {
  // -- Returns zero '0' if string contains no digits
  // default: true, [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true: -34.4345 | false: -34.4345]
  op_ReturnZeroIfNoDigit: true,
  // -- Return the absolute number without possible preceeding zeros '0'
  // default: true, [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true: -34.4345 | false: -00,034.4345]
  op_ReturnAbsoluteNumber: true,
  // -- Allows sign (-) if true, removes any present sign if false
  // default: true [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true = -34.4345 | false = 34.4345]
  op_AllowSign: true, 
  // -- If decimal should be allowed or not
  // default: true [test: '-00034.dj^nkjls.d$knls.4h%bj345' | true = -34.4345 | false = -34]
  op_AllowDecimal: true, 
  // -- Forces decimal even if string contains no decimal points (but only if op_AllowDecimal is true)
  // default: true [test: '-00034dj^nkjlsd$knls4h%bj345' | true: -344,345.00 | false: -344,345]
  op_ForceDecimal: true, 
  // -- Appends zero '0' to result if just one digit is found after the last decimal point
  // default: true [test: '-00034dj^nkjlsd$knls4h%bj34.5' | true: -34,434.50 | false: -34,434.5]
  op_AppendZeroToDecimal: true,
  // -- Character to use im place of the decimal period symbol
  // default: '.'
  op_DecimalDelimiterChar: '.',
  // -- Thousands separator
  // default: ','
  op_DelimiterChar: ',',
  // -- Thousands character spacing with ' '
  // default: false [test: '-00034dj^nkjlsd$knls4h%bj.34.5' | true: -34, 434.50 | false: -34,434.50]
  op_AddSpaceToDelimiter: true
})
```
