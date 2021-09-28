/*
An alphanumeric ordering of strings is defined as follows: each string is considered as a sequence of tokens, where each token is a letter or a number (as opposed to an isolated digit, as is the case in lexicographic ordering). For example, the tokens of the string "ab01c004" are [a, b, 01, c, 004]. In order to compare two strings, we'll first break them down into tokens and then compare the corresponding pairs of tokens with each other (i.e. compare the first token of the first string with the first token of the second string, etc).

Here is how tokens are compared:

If a letter is compared with another letter, the usual alphabetical order applies.
A number is always considered less than a letter.
When two numbers are compared, their values are compared. Leading zeros, if any, are ignored.
If at some point one string has no more tokens left while the other one still does, the one with fewer tokens is considered smaller.

If the two strings s1 and s2 appear to be equal, consider the smallest index i such that tokens(s1)[i] and tokens(s2)[i] (where tokens(s)[i] is the ith token of string s) differ only by the number of leading zeros. If no such i exists, the strings are indeed equal. Otherwise, the string whose ith token has more leading zeros is considered smaller.

Here are some examples of comparing strings using alphanumeric ordering.

"a" < "a1" < "ab"
"ab42" < "ab000144" < "ab00144" < "ab144" < "ab000144x"
"x11y012" < "x011y13"
Your task is to return true if s1 is strictly less than s2, and false otherwise.
*/

function alphanumericLess(s1, s2) {
    //Helper function to split strings into tokens.
    const splitTokens = str => {
        let str_split = [];
        let currentNumber = '';
        
        for(let i = 0; i < str.length; i++) {
            if(isNaN(str[i])) {
                //If there is a currentNumber to be pushed, make sure to do that now.
                if(currentNumber.length > 0) {
                    str_split.push(currentNumber);
                    currentNumber = '';
                }
                str_split.push(str[i]);
            } else {
                currentNumber += str[i];
            }
        }
        if(currentNumber.length > 0) str_split.push(currentNumber);
        
        return str_split;
    };
    
    let s1_split = splitTokens(s1);
    let s2_split = splitTokens(s2);

    for(let i = 0; i < Math.max(s1_split.length, s2_split.length); i++) {
        //If both tokens are not numbers
        if(isNaN(s1_split[i]) && isNaN(s2_split[i])) {
            if(s1_split[i] < s2_split[i]) {
                return true;
            } else if(s1_split[i] > s2_split[i]) {
                return false;
            }
        //If s1 has a number and s2 has a non-number
        } else if(!isNaN(s1_split[i]) && isNaN(s2_split[i])) {
            return true;
        //If both are numbers
        } else if(!isNaN(s1_split[i]) && !isNaN(s2_split[i])) {
            //If these numbers are too large, use bigint.
            let num1 = s1_split[i] > Number.MAX_SAFE_INTEGER ?
            BigInt(s1_split[i]) : Number(s1_split[i]);
            let num2 = s2_split[i] > Number.MAX_SAFE_INTEGER ?
            BigInt(s2_split[i]) : Number(s2_split[i]);
            
            if(num1 < num2 &&
            !(i === s2_split.length - 1 && s1_split.length > s2_split.length)) { 
                return true;
            }
            //See if both these numbers have the same numeric value BUT s1 has more leading zeros.
            if(num1 === num2 && s1_split[i].length > s2_split[i].length) return true;
        }
        
        if(s1_split[i] === s2_split[i] && !s1_split[i + 1] && s2_split[i + 1]) return true;
    }
    
    //If values are equal or s1 is greater than s2, return false;
    return false;
}
