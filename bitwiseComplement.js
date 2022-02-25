/*
The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
Given an integer n, return its complement.
*/

var bitwiseComplement = function(n) {
    //ParseInt will turn the result of everything BACK into an integer.
    //Turn n to a binary string, split into an array, and flip the bits.
    return parseInt(n
        .toString(2)
        .split("")
        .map(bit => {
            return bit === "1" ? "0" : "1";
        })
        .join(""), 2);
};