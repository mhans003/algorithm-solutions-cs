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
