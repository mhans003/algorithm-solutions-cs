/*
Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If the longest uncommon subsequence does not exist, return -1.

An uncommon subsequence between two strings is a string that is a subsequence of one but not the other.

A subsequence of a string s is a string that can be obtained after deleting any number of characters from s.

For example, "abc" is a subsequence of "aebdc" because you can delete the underlined characters in "aebdc" to get "abc". Other subsequences of "aebdc" include "aebdc", "aeb", and "" (empty string).
*/

var findLUSlength = function(a, b) {
    //All that is required here is to return the longer string length OR the length of both (if they aren't equal)
    //Think of it this way as an example: 'morefun' will always itself be a longer subsequence than 'fun'
    return a === b ?
        -1 :
        a.length > b.length ? 
        a.length : 
        b.length;
};