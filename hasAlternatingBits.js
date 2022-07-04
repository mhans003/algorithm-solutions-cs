/*
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.
*/

var hasAlternatingBits = function(n) {
    //Create binary representation as a string.
    let binary = n.toString(2);
    
    //Check every bit to compare to last (if equal to last, return false).
    let prev = binary[0];
    for(let i = 1; i < binary.length; i++) {
        if(binary[i] === prev) return false;
        //Update bit.
        prev = prev === "1" ? "0" : "1";
    }
    
    return true;
};