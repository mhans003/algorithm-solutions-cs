/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.
*/

var isPowerOfThree = function(n) {
    //Handle case of power of 0.
    if(n === 1) return true;
    //Start with the current number.
    let current = n;
    //Iteratively divide by 3, returning false if the current number does not have 3 as a factor. 
    while(current > 3) {
        console.log(current);
        if(current % 3 !== 0) return false;
        current /= 3;
    }
    //By the end of the loop, only 3 should remain, otherwise return false.
    if(current === 3) return true;
    return false;
};