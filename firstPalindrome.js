/*
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.
*/

var firstPalindrome = function(words) {
    //Loop through each word, and if it is the same forward and backward.
    for(let i = 0; i < words.length; i++) {
        if(words[i].split('').reverse().join('') === words[i]) return words[i];
    }
    //If none are found, return empty.
    return "";
};