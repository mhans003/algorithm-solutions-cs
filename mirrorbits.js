//Reverse the order of the bits in a given integer.

function mirrorBits(a) {
    //Convert this integer into binary.
    let binary = a.toString(2).split("").reverse().join("");
    //Convert the reversed binary back into an integer.
    let output = parseInt(binary, 2);
    return output;
}