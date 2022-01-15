# banglejs-2-four-fold-clock-face #

a simple clock face with numbers 3, 6, 9 and 12 for analog clocks on a Bangle.js 2

This module draws a face with the numbers 3, 6, 9 and 12 for an analog clock running on a [Bangle.js 2](https://www.espruino.com/Bangle.js2).

<table>
 <tr valign="top">
   <td align="center"><img src="indianNumerals.png"><br>with indian numerals</td>
   <td align="center"><img src="romanNumerals.png"><br>with roman numerals</td>
 </tr>
</table>

## Usage ##

Within a clock implementation, the module may be used as follows:

```
let Clockwork = require(...);
Clockwork.windUp({
  face:require('https://raw.githubusercontent.com/rozek/banglejs-2-four-fold-clock-face/main/ClockFace.js'),
  ...
}, { romanNumerals:false });
```

`Settings.romanNumerals` may be set to `true` if roman numerals are prefered. If missing or set to `false`, indian numerals are drawn instead.

## Example ##

The following code shows a complete example for a (still simple) analog clock using this clock face:

```
let Clockwork = require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clockwork/main/Clockwork.js');

Clockwork.windUp({
  face: require('https://raw.githubusercontent.com/rozek/banglejs-2-four-fold-clock-face/main/ClockFace.js'),
  hands:require('https://raw.githubusercontent.com/rozek/banglejs-2-simple-clock-hands/main/ClockHands.js'),
},{
  Foreground:'#000000', Background:'#FFFFFF', Seconds:'#FF0000'
});
```

## License ##

[MIT License](LICENSE.md)
