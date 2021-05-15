/*
A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.

Given a string, check whether it is beautiful.
*/

function isBeautifulString(inputString) {
    //Create character map using character codes as keys
    let inputArray = inputString.split("");
    let charMap = {};
    
    inputArray.forEach(character => {
        charMap[String(character.charCodeAt(0))] ? 
        charMap[String(character.charCodeAt(0))]++ : 
        charMap[String(character.charCodeAt(0))] = 1;
    });
    
    //Go through each key in the character map.
    for(let charKey in charMap) {
        //If this key has more than the 'previous' key based on character codes, OR if we are not at 'a' and there is no key for the previous character code, return false;
        if(charMap[charKey] > charMap[String(Number(charKey) - 1)] || !charMap[String(Number(charKey) - 1)] && charKey !== "97") return false;
    }
    
    return true;
}
