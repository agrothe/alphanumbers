[![Build Status](https://travis-ci.org/agrothe/alphanumbers.svg?branch=master)](https://travis-ci.org/agrothe/alphanumbers)

# alphanumbers
Converts numbers to alphabetical strings and back.

Because I don't like to use numbers in URL paths, this nodejs module converts them to an alphabetical string.

**This is NOT a cryptographic module.** Please don't use it as such.

## Intended Use

This library is intended to convert numbers to characters and back for **display only**. Please use caution if storing the results as subsequent versions may change the character conversion sets.

## Example

Converts 11121314 to HAQhW.

E.g.: http://example.com/users/11121314 becomes http://example.com/users/HAQhW

```
var alphanum = require('alphanumbers');

var str = alphanum.toAlpha(11121314);
//str = HAQhW

var num = alphanum.toNumeric('HAQhW');
//num = 11121314
```

Includes the replaceAll utility function as found on http://stackoverflow.com/a/6714233/153083 but doesn't add it as a prototype method.

`replaceAll: function(sourceString, findStr, replaceWithStr, ignoreCase)`

```
var str = alphanum.replaceAll('x','x','xyz',false); 
// str = xyz
```

## Contribute
Fork and send pull request! Please observe the following:

- Pure alphabetical substitution is preferred.
- Any sort of statistical analysis for better number shorting much appreciated
- Additional unit tests wanted


Currently 125 tests are passing.

http://semver.org/
