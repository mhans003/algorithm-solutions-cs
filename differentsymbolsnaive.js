//Given a string, find the number of different characters in it.

function differentSymbolsNaive(s) {
    //Create a character map object from the string.
    let charMap = {};
    for(let i = 0; i < s.length; i++) {
        charMap[s[i]] ? charMap[s[i]]++ : charMap[s[i]] = 1;
    }
    
    //Count the number of unique characters as properties in the character map object.
    let uniqueChars = 0;
    for(let letter in charMap) uniqueChars++;
    
    return uniqueChars;
}