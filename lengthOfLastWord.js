/*
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

var lengthOfLastWord = function(s) {
    //Turn the string into an array, filtering out blank strings.
    let words = s.split(' ').filter(s => s !== '');
    //Return the length of the last 'word' in the string.
    return words[words.length - 1].length;
};