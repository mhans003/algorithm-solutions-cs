/*
You're given a substring s of some cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?

Example

For s = "cabca", the output should be
cyclicString(s) = 3.

"cabca" is a substring of a cycle string "abcabcabcabc..." that can be obtained by concatenating "abc" to itself. Thus, the answer is 3.
*/

function cyclicString(s) {
    let lengths = [];
    //Start building string(s) to be repeated
    for(let i = 0; i < s.length; i++) {    
        //Build up the string starting at this point
        let subString = "";
        for(let j = i; j < s.length; j++) {
            subString += s[j];
            //See if this string, when repeated, creates the target string.
            let repeatedString = "";
            //Using the current sub-string, continue to build a repeated string and see if 's' is a part of it.
            while(repeatedString.length <= s.length + subString.length) {
                repeatedString += subString;
                if(repeatedString.includes(s)) {
                    //If we find a match, push this length and continue on.
                    lengths.push(subString.length);
                    break;
                }
            }
        }
    }
    //Return the length of the smallest combination.
    return Math.min(...lengths);
}
