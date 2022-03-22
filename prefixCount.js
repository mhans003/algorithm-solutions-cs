/*
You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.
*/

var prefixCount = function(words, pref) {
    //Loop through each word, using reduce function (using count as previous and word as current)
    return words.reduce((count, word) => {
        //Increase the count by 1 if this word contains the prefix at the required position(s).
        return word.substring(0, pref.length) === pref ? count + 1 : count;
    }, 0);
};