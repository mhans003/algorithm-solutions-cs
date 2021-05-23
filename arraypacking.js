/*
You are given an array of up to four non-negative integers, each less than 256.

Your task is to pack these integers into one number M in the following way:

The first element of the array occupies the first 8 bits of M;
The second element occupies next 8 bits, and so on.
Return the obtained integer M.

Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.
*/

function arrayPacking(a) {
    //Create binary representation of this number as an array, reverse the order, and join together.
    let binary = a.map(number => {
        let thisBinary = number.toString(2);
        while(thisBinary.length < 8) {
            thisBinary = "0" + thisBinary;
        }
        return thisBinary;
    });
    let binaryJoin = binary.reverse().join("");
    //Sum up the total by going through each character (from the right), and adding the correct power of 2 to the total.
    let total = 0;
    for(let i = 0; i < binaryJoin.length; i++) {
        if (binaryJoin[binaryJoin.length - 1 - i] === "1") total += (2 ** i);
    }
    return total;
}
