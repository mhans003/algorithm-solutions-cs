//Given two binary strings a and b, return their sum as a binary string.

var addBinary = function(a, b) {
    //Use BigInt to prevent overflow.
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    //Convert back to binary.
    return sum.toString(2);
};