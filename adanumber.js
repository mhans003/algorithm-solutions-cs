/*
Consider two following representations of a non-negative integer:

A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between # characters, and preceded by the base, which can only be a number between 2 and 16 in the first representation. For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.
Additionally, both representations may contain underscore (_) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.

Your task is to determine whether the given string is a valid integer representation.

Note: this is how integer numbers are represented in the programming language Ada.
*/

function adaNumber(line) {
    console.log("testing update name")
    //Helper function to see if chars in number part of string are valid in this base.
    const checkChar = (base, str) => {
        for(let i = 0; i < str.length; i++) {
            //If this particular char returns NaN, we know this whole string isn't valid in this base.
            if(isNaN(parseInt(str[i], base))) {
                return false;
            } 
        }
        //Make sure the string doesn't have a length of 0 (this triggers a 'false positive' true)
        return str.length === 0 ? false : true;
    };
    
    //If this number is simply a valid integer with underscores, return true.
    let stripped = line.split("").filter(char => char !== "_").join("");
    if(!isNaN(stripped) && stripped.length > 0) return true;
    
    //Otherwise, split this into an array, which should have 3 elements: a valid base, a valid number, and an empty third element.
    let hashSplit = stripped.split("#");
    
    //Return true if all 3 conditions are correct, including this array only having 3 elements.
    return hashSplit.length === 3 && 
           hashSplit[0] > 1 && hashSplit[0] < 17 &&
           checkChar(Number(hashSplit[0]), hashSplit[1]) &&
           hashSplit[2].length === 0;
}
