/*
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.
*/

var isPowerOfFour = function(n) {
    //Handle case of power of 0.
    if(n === 1) return true;
    //Start with the current number.
    let current = n;
    //Iteratively divide by 4, returning false if the current number does not have 4 as a factor. 
    while(current > 4) {
        console.log(current);
        if(current % 4 !== 0) return false;
        current /= 4;
    }
    //By the end of the loop, only 3 should remain, otherwise return false.
    if(current === 4) return true;
    return false;
};