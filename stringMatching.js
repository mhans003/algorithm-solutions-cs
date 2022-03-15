/*
Given an array of string words. Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].
*/

var stringMatching = function(words) {
    //Sort strings by length
    words.sort((a, b) => b.length - a.length);
    
    //Keep track of words to return.
    let substrings = [];
    
    //For each string, look at every subsequent string (since they are sorted).
    for(let i = 0; i < words.length; i++) {
        //See if this strings is in the strings after.
        for(let j = i + 1; j < words.length; j++) {
            //If this is a match, make sure it isn't already in the substrings array.
            if(words[i].includes(words[j]) && !substrings.includes(words[j])) substrings.push(words[j]);
        }
    }
    
    return substrings;
};