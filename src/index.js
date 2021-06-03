'use strict';

function isString(str) {
  return typeof str == "string";
}

function hasWords(arr) {
  return arr !== null;
}

/**
 * Returns the longest word of a sentence.
 * If there is more than one word with the same length the last will be returned.
 * @param {string} str
 * @return {string}
 */
module.exports.longestWord = function(str) {
  //null quick exit  
  if (!isString(str)) return "";

  //Chunk that string into words
  var arr = str.match(/\w[a-z]{0,}/gi);

  //Empty string (or completely numeric string) quick exit
  if (!hasWords(arr)) return "";

  var result = arr[0];
  for(var x = 1; x < arr.length; x++) {
    if(result.length < arr[x].length) {
      result = arr[x];
    } 
  }
  return result;
}