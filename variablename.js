/*
Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.
*/

function variableName(name) {
    //Make sure characters are alphanumeric or underscores
    for(let i = 0; i < name.length; i++) {
        
        let code = name.charCodeAt(i);
        
        //See if first character is a number. 
        if(i === 0) {
            if(code > 47 && code < 58) return false;
        }
        
        //Check all other cases.
        if(!(code > 64 && code < 91) && 
        !(code > 96 && code < 123) && 
        !(code > 47 && code < 58) &&
        !(code === 95)) {
            return false;
        }
    }
    
    return true;
}

