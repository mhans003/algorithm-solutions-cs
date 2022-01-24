/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
*/

var wordPattern = function(pattern, s) {
    //Place the words of the string into an array.
    let words = s.split(" ");
    //Create character map connecting letters in pattern to words in s.
    let wordMap = {};
    
    //Return early if the length of words and the pattern is different.
    if(words.length !== pattern.length) return false;
    
    for(let i = 0; i < words.length; i++) {
        if(!wordMap[pattern[i]]) {     
            //If this word isn't already part of the character map, Add this word to the word map if it doesn't already exist.
            if(Object.values(wordMap).indexOf(words[i]) === -1) {
               wordMap[pattern[i]] = words[i];
            } else {
                //Otherwise, this word is already matched by a different character.
                return false;
            }
        } else {
            //Otherwise, return false if this word and the letter in pattern don't correspond to the established pattern.
            if(wordMap[pattern[i]] !== words[i]) {
                return false;
            }
        }
    }
    
    return true;
};