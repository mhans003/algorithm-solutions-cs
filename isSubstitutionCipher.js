/*
A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example "bacdef...xyz" will be a simple ciphertext alphabet where a and b are rearranged.

A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e. having the same index) letter of some ciphertext alphabet.

Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.
*/

function isSubstitutionCipher(string1, string2) {
    //Keep track of both character sets/keys.
    let charMap1 = {};
    let charMap2 = {};
    //Go through each character.
    for(let i = 0; i < string1.length; i++) {
        //If they keys for this letter don't exist yet, make them each other's key.
        if(!charMap1[string1[i]] && !charMap2[string2[i]]) {
            charMap1[string1[i]] = string2[i];
            charMap2[string2[i]] = string1[i];
            //Otherwise, if a key does exist, check it against what it should be.
        } else if(charMap1[string1[i]] !== string2[i] || charMap2[string2[i]] !== string1[i]) {
            return false;
        }
    }

    return true;
}
