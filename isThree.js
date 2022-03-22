/*
Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.
*/

var isThree = function(n) {
    //Return early.
    if(n < 4) return false;
    //Save all factors found.
    let factors = [];
    //Store max number to check (this will be updated/reduced each time a new factor is found).
    let max = n;
    //Find all factors.
    for(let i = 1; i < max; i++) {
        //If i divides evenly into n, store this factor pair.
        if(n % i === 0) {
            //Store this factor.
            factors.push(i);
            //If the other factor in this particular pairing is not the same as i, store it as well.
            if(n / i !== i) {
                factors.push(n / i);
            }
            //If there are now more than three factors, return early.
            if(factors.length > 3) return false;
            //Update max (to prevent unnecessary iterations and duplicate factors.
            max = n / i;
        }
    }
    if(factors.length === 3) return true;
    return false;
};