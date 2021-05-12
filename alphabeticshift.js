/*
Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a). 
*/

function alphabeticShift(inputString) {
    let newString = "";
    //For each character, add one to the char code.
    for(let i = 0; i < inputString.length; i++) {
        if(inputString.charCodeAt(i) === 122) {
            //Use 'a' if we are already at 'z'
            newString += 'a';
        } else {
            //Otherwise, add one to the char code.
            newString += String.fromCharCode((inputString.charCodeAt(i) + 1));
        }
    }
    return newString;
}