# alphanumbers
Converts numbers to alphabetical strings and back.

Because I don't like to use numbers in URL paths, this nodejs module converts them to an alphabetical string.

**This is NOT a cryptographic module.** Please don't use it as such.

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



Currently 125 tests are passing.
