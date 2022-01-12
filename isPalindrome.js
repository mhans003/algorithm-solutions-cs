/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

var isPalindrome = function(s) {
    //Compare the reversed string to the normal string (both stripped of special characters and lower case)
    return s.toLowerCase()
        .replace(/[^0-9a-z]/gi, '')
        .split('')
        .reverse()
        .join('') === s.toLowerCase().replace(/[^0-9a-z]/gi, '');
};