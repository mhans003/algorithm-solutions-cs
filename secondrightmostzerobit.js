/*
Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit.
*/

function secondRightmostZeroBit(n) {
    //Return 2 to the power of the following expression:
    //Take the reversed binary string representation of this integer
    //Remove the first part of the string with the first 0 and count its length
    //Add that length to the position of the first zero in the second part of the string,
    //where we find the index of the first 0 in the second half (therefore the second 0)
    return 2 ** (n.toString(2)
          .split("")
          .reverse()
          .join("")
          .substring(0, n.toString(2).split("").reverse().join("").indexOf("0") + 1)
          .length +
      
          n.toString(2)
          .split("")
          .reverse()
          .join("")
          .substring(n.toString(2).split("").reverse().join("").indexOf("0") + 1)
          .indexOf("0"));
}
  