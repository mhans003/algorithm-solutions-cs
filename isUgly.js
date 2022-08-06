/*
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.
*/

var isUgly = function(n) {
    //Cannot be less than 1
    if(n < 1) return false;
    
    //Iteratively divide by one of the 'ugly' factors (starting with lowest) if it is a factor.
    while(n > 1) {
        if(n % 2 === 0) {
            n /= 2;
        } else if(n % 3 === 0) {
            n /= 3;
        } else if(n % 5 === 0) {
            n /= 5;
        } else {
            //Cannot be divided by 2, 3, or 5, so cannot be ugly.
            return false;
        }
    }
    
    return true;
};