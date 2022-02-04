/*
A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.
*/

var checkPerfectNumber = function(num) {
    let factors = [];
    
    //Get all factors of the number (except for number itself)
    let max = num;
    let i = 1;
    do {
        //See if this is a factor.
        if(num % i === 0) {
            //Make sure longer side is first in set.
            if(num / i !== num) {
                factors.push(num / i);
            }
            if(i !== num) {
                factors.push(i);
            }
        }
        //Update max and i.
        max = Math.ceil(num / i);
        i++;
    } while(i < max);
        
    console.log(factors);
    
    //Return true if the factors add to the number.
    return num === factors.reduce((a, b) => a += b, 0);  
};