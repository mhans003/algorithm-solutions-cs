/*
You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

Return the reformatted string or return an empty string if it is impossible to reformat the string.
*/

var reformat = function(s) {
    //Keep track of all 'letter' characters
    let letters = [];
    let numbers = [];
    
    let result = "";
    
    //Store each character as a letter or number.
    for(let i = 0; i < s.length; i++) {
        if(isNaN(parseInt(s[i]))) {
            letters.push(s[i]);
        } else {
            numbers.push(s[i]);
        }
    }
    
    //Return early if there aren't equal number of characters/letters(s.length is even) or off by one(if s.length is odd)
    if(s.length % 2) {
        if(!(letters.length === numbers.length + 1 || letters.length === numbers.length - 1)) return result;
    } else {
        if(letters.length !== numbers.length) return result;
    }
    
    //Otherwise, rebuild a permutation of this string. 
    
    //Insert a number first if there is one more number than letter; Otherwise start with letter by default.
    let insertLetter = numbers.length > letters.length ? false : true;
    while(letters.length || numbers.length) {
        //Insert the next character (which ever type of character this current one needs to be)
        result += insertLetter ? letters.shift() : numbers.shift();
        //Switch the type of character to use for the next iteration.
        insertLetter = !insertLetter;
    }
    
    return result;
};