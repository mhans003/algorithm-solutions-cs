/*
Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.
*/

var maxScore = function(s) {
    //Start with the number of zeros present with only the first element (1 or 0)
    let zeroCount = s[0] === "0" ? 1 : 0;
    //Start with the number of ones in the rest of the characters.
    let onesCount = s.split("").reduce((prev, curr, index) => prev = curr === "1" && index > 0 ? prev + 1 : prev, 0);
    
    //Add up the initial total of the left and right side. 
    let currentTotal = zeroCount + onesCount;
    
    //Go through the characters. 
    for(let i = 1; i < s.length - 1; i++) {
        //When a zero is encountered, add it to the left frame. 
        if(s[i] === "0") {
            zeroCount++;
        } else {
            //If a one is encountered, remove from the left side (don't let it become negative).
            if(onesCount > 0) onesCount--;
        }
        //If the current total of the zero side and the one side is larger than the stored total, replace it. 
        currentTotal = Math.max(currentTotal, zeroCount + onesCount);
    }
    
    return currentTotal;
};