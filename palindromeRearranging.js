/*
Given a string, find out if its characters can be rearranged to form a palindrome.
*/

function palindromeRearranging(inputString) {
    //Create a character map in an object for the string characters.
    let charMap = {};
    for(let i = 0; i < inputString.length; i++) {
        !charMap[inputString[i]] ? charMap[inputString[i]] = 1 : charMap[inputString[i]]++;
    }
    
    //Check through each character in the map object. In order to be arranged into a palindrome, only one set of characters can be odd (the center letter).
    let oddsLeft = 1;
    for(let letter in charMap) {
        if(charMap[letter] % 2 !== 0) {
            oddsLeft--;
        }
    }
    
    //If there is 0-1 odd set of characters, we can make it into a palindrome.
    if(oddsLeft > -1) return true;
    
    return false;
}
