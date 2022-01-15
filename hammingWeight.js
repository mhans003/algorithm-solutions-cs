/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
*/

var hammingWeight = function(n) {
    //Convert the binary string into a string split into array form.
    //For each element in the array, if it is a '1' representing a set bit, add to a total, starting at 0.
    return n.toString(2)
        .split("")
        .reduce((prev, current) => current === "1" ? prev + 1 : prev, 0)
};