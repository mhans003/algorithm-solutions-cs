/*
Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

Define a string reflection as the result of applying the alphabet reflection to each of its characters.

Reflect the given string.
*/

function reflectString(inputString) {
    return inputString
    .split("")
    .map(character => {
        if(character.charCodeAt(0) < 110) {
            return String.fromCharCode(122 - (character.charCodeAt(0) - 97));
        } else {
            return String.fromCharCode(97 + (122 - character.charCodeAt(0)));
        }
    })
    .join("");
} 