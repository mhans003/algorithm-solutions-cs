/*
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.
*/

var numDecodings = function(s) {
    //Answers cannot have 0 as first character.
    if(s[0] === '0') return 0;
    
    //Save the length of the input string.
    let n = s.length;
    
    //Start a fibonnaci sequence to keep track of total.
    let sequence = new Array(n + 1).fill(0);
    sequence[0] = 1;
    sequence[1] = 1;
    
    //Loop through characters in the string.
    for(let i = 2; i <= s.length; i++) {
        //Get the next digit character and convert to number.
        let ones = Number(s[i - 1]);
        
        //If the ones place of the next number being looked at is a valid digit:
        if(ones >= 1 && ones <= 9) {
            //Build the next new number in fibonacci sequence.
            sequence[i] += sequence[i - 1];
        }
        
        //Get the full 2 digit number at current position and convert to number.
        let tens = Number(s[i - 2].concat(s[i - 1]));
        
        //If tens number is valid as a whole:
        if(tens >= 10 && tens <= 26) {
            //Add previous two numbers in fibonacci sequence
            sequence[i] += sequence[i - 2];
        }
    }
    
    //Return the portion of the sequence being built at this point.
    return sequence[n]
};