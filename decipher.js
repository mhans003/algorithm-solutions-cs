/*
Consider the following ciphering algorithm:

For each character replace it with its code.
Concatenate all of the obtained numbers.
Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.
*/

function decipher(cipher) {
    let currentCode = "";
    let result = "";
    for(let i = 0; i < cipher.length; i++) {
        //Start or continue building the current code.
        currentCode += cipher[i];
        //Check if the current code is a valid value between 97-122.
        if(Number(currentCode) >= 97 && Number(currentCode) <= 122) {
            //If so, add to the result using this character code.
            result += String.fromCharCode(Number(currentCode));
            //Now, reset the current code.
            currentCode = "";
        }
    }
    return result;
}
