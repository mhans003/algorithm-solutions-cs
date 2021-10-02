/*
Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

If there is no solution, return -1.
*/

function constructSquare(s) {
    //Helper function to count occurances of each character.
    let countDigits = str => {
        let digits = [];
        //Until we run out of characters
        while(str.length) {
            //Save the first character
            let char = str[0];
            //Find the total number of times this character occurs, save that number(push) and remove those characters.
            digits.push(str.length - (str = str.replace(new RegExp(char, "g"), "")).length);
        }
        return digits.sort((a, b) => b - a).join("");
    };
    
    //Find largest possible square based on rearranging into largest possible number.
    let charMap = {};
    let largestUsed = 9;
    for(let i = 0; i < s.length; i++) {
        if(!charMap[s[i]]) {
            charMap[s[i]] = largestUsed;
            largestUsed--;
        }
    }
    let largest = [];
    for(let i = 0; i < s.length; i++) {
        largest.push(charMap[s[i]]);
    }
    //Get the smallest and largest "possible" values to be squared.
    let min = Number("1" + Array(Math.floor((s.length - 1) / 2)).fill(0).join(""));
    let max = Math.ceil(Math.sqrt(Number(largest.sort((a,b) => b - a).join(""))));
    
    //Get the count for each digit/character initially.
    let digits = countDigits(s);
    
    //Go through each number, starting at the largest possible.
    for(let i = max; i >= min; i--) {
        //See if running countDigits on this number provides the same result as the input string.
        if(countDigits(String(i * i)) === digits) return i * i;
    }
    
    //No result was found that worked.
    return -1; 
}
