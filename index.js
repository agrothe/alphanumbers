
var numbers = ['0','1','2','3','4','5','6','7','8','9','00','11','22','33','44','55','66','77','88','99','01','02','03','04','05','06','07','08','09','21','20','23','24','25','26','27','28','29','89','98','97','96','95','94','93','92','91','90','111','000','1111','0000'];
var characters = ['G','h','r','Q','W','z','X','a','b','t','T','v','j','C','I','d','S','l','L','F','q','V','u','R','m','M','f','w','n','A','y','o','O','N','B','E','x','D','s','K','P','c','J','i','p','g','Y','e','H','Z','k','U'];
var alphanum = {
  /**
   * toAlpha: Converts a numberic value to alphabetical
   *
   * @param  {String|number} number
   * @return {String}
   */
  toAlpha: function(number) {
    // first, convert number to a string, it's ok if it
    // already is a string.
    var numStr = number.toString();
    // for each number set to match against, in reverse as
    // our larger combinations are at the end of the array
    for (var i = numbers.length; i-- > 0; ) {
      // if the string contains number[i]
      if(numStr.indexOf(numbers[i])>-1){
        // perform a replace on all occurances
        numStr = alphanum.replaceAll(numStr,numbers[i],characters[i],false);
      }
    }
    return numStr;
  },
  /**
   * toNumeric: Converts an alphabetical value to numeric
   *
   * @param  {String} alpha
   * @return {Number}
   */
  toNumeric: function(alpha) {
    // for each number set to match against, in reverse as
    // our larger combinations are at the end of the array
    for (var i = characters.length; i-- > 0; ) {
      // if the string contains number[i]
      if(alpha.indexOf(characters[i])>-1){
        // perform a replace on all occurances
        alpha = alphanum.replaceAll(alpha,characters[i],numbers[i],false);
      }
    }
    return parseInt(alpha);
  },
  /**
   * replaceAll: Using string o, find str1 and replace with str2, optionally ignore case
   *
   * @param  {String} o
   * @param  {String} str1
   * @param  {String} str2
   * @param  {Bool} ignore
   * @return {String}
   */
  replaceAll: function(o,str1,str2,ignore) {
    return o.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
  }
};

module.exports = alphanum;