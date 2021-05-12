/*
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.
*/

function variableName(name) {
    //Return early if first character is a digit or a space
    if(name.charCodeAt(0) > 47 && name.charCodeAt(0) < 58 || name[0] === " ") return false;
    
    //Make sure all other characters are alphanumeric or underscores
    for(let i = 1; i < name.length; i++) {
        let code = name.charCodeAt(i);
        if(!(code > 64 && code < 91) && 
        !(code > 96 && code < 123) && 
        !(code > 47 && code < 58) &&
        !(code === 95)) {
            return false;
        }
    }
    
    return true;
}
