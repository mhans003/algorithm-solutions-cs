/*
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
THIS SOLUTION DOES NOT USE BUILT-IN toLowerCase()
*/

var toLowerCase = function(s) {
    //This solution does not use built-in toLowerCase.
    
    //Build a new string to output.
    let output = "";

    //Loop through each character. If this character is uppercase, replace with lowercase version.
    for(let i = 0; i < s.length; i++) {
        if(s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            output += String.fromCharCode(s.charCodeAt(i) + 32);
        } else {
            output += s[i];
        }
    }
    
    return output;
};