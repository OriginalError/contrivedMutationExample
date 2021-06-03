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
  let arr = str.match(/\w[a-z]{0,}/gi);

  //Empty string (or completely numeric string) quick exit
  if (!hasWords(arr)) return "";

  let result = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(result.length < arr[i].length) {
      result = arr[i];
    } 
  }
  return result;
}