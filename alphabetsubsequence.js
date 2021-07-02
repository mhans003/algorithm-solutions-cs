//Check whether the given string is a subsequence of the plaintext alphabet.

function alphabetSubsequence(s) {
    //Keep track of the current code.
    let lastCode = s.charCodeAt(0);
    //Loop through every other character, and make sure it is 'next' in the sequence.
    for(let i = 1; i < s.length; i++) {
        //If this character has a code that is the same or less than the previous character, return false.
        if(s.charCodeAt(i) <= lastCode) return false;
        lastCode = s.charCodeAt(i);
    }
    return true;
}
