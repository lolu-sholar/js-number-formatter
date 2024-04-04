## Number Formatter
A javascript module that scans through string to remove non-numerals and formats out any found numbers based on configuration passed to it.

## 💾 Setup
You need to have NodeJS installed on your computer before using <code>npm</code>.
Open a terminal/command prompt and enter the codes below to install the package:
```javascript
npm install js-number-formatter
```

## 🔨 Usage
```javascript
// -- Require the module
import numberFormat from 'js-number-formatter';

const value = '3.142857';

const options = {
  // ... check the parameters section for more info on options
};

// -- Call function and pass the value to format and options to it or just the value
numberFormat(value, options);
```

## 📙 Parameters
<table>
  <thead>
    <td>Parameter</td>
    <td>Description</td>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>The value to format which can be a number or string</td>
    </tr>
    <tr>
      <td>options</td>
      <td>
        <ul>
          <li>
            <code>opReturnZeroIfNoDigit</code><br/>
            <b>true</b> by default<br/>
            Returns zero '0' if string contains no digits
          </li>
          <li>
            <code>opReturnAbsoluteNumber</code><br/>
            <b>true</b> by default<br/>
            Return the absolute number without possible preceeding zeros '0'
          </li>
          <li>
            <code>opAllowSign</code><br/>
            <b>true</b> by default<br/>
            Allows sign (-) if true, removes any present sign if false
          </li>
          <li>
            <code>opAllowDecimal</code><br/>
            <b>true</b> by default<br/>
            If decimal should be allowed or not
          </li>
          <li>
            <code>opForceDecimal</code><br/>
            <b>true</b> by default<br/>
            Forces decimal even if string contains no decimal points (but only if opAllowDecimal is true)
          </li>
          <li>
            <code>opIgnoreDecimal</code><br/>
            <b>false</b> by default<br/>
            Ignores any already existing decimal point in the string (very useful for formatting number in input field)
          </li>
          <li>
            <code>opAppendZeroToDecimal</code><br/>
            <b>true</b> by default<br/>
            Appends zero '0' to result if just one digit is found after the last decimal point
          </li>
          <li>
            <code>opDecimalDelimiterChar</code><br/>
            <b>'.'</b> by default<br/>
            Character to use im place of the decimal period symbol
          </li>
          <li>
            <code>opDelimiterChar</code><br/>
            <b>','</b> by default<br/>
            Thousands separator
          </li>
          <li>
            <code>opAddSpaceToDelimiter</code><br/>
            <b>false</b> by default<br/>
            Thousands character spacing with ' '
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 🎨 Examples
```javascript
numberFormat(3892); // Result: 3,892.00

numberFormat('140hajs7'); // Result: 1,407.00

numberFormat("you can't be serious ..."); // Result: 0

numberFormat("Hello World 20-06-2019", {
  opAllowSign: false
}); // Result: 20,062,019.00

numberFormat('-00034dj^nkjlsd$knls4h%bj.34.5', {
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
});
```
