/*
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
*/

function lineEncoding(s) {
    //Create the substring groups
    let substrings = [];
    //Keep track of the last character and group currently being built.
    let lastChar = s[0];
    let lastGroup = {
        chars: lastChar,
        count: 1
    }
    
    //Go through each character to build the substrings.
    for(let i = 1; i < s.length; i++) {
        //If this character is the same as last, add to the current group.
        if(s[i] === lastChar) {
            lastGroup.chars += s[i];
            lastGroup.count++;
        } else {
            //Otherwise, push the groups and update the last character and current group.
            substrings.push(lastGroup);
            
            lastChar = s[i];
            lastGroup = {
                chars: lastChar,
                count: 1
            }
        }
        
        //At the end, push the last group.
        if(i === s.length - 1) substrings.push(lastGroup);
    }
    
    //Build string to return.
    let output = "";
    
    substrings.forEach(group => {
        //If the count is greater than 1, add the number before the character.
        group.count > 1 ? output += group.count : output;
        //Add the character of this group.
        output += group.chars[0];
    });
    
    return output;
}