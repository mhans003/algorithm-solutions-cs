/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.
*/

var reverseOnlyLetters = function(s) {
    //Array form of string input
    let strArray = s.split("");
    //Store indexes of letters
    let indexes = [];
    
    //Find indexes of letters, find alpha characters, and reverse them.
    let chars = strArray.filter((char, index) => {
        if(/[a-zA-Z]/.test(char)) {
            indexes.push(index);
            return char;
        }
    }).reverse();
    
    //Using the indexes of characters and reversed characters, replace every instance of an alpha character with reverse.
    return strArray.map((char, index) => {
        if(index === indexes[0]) {
            indexes.shift();
            return chars.shift();
        } 
        return char;
    }).join("");
};