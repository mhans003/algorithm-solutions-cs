//Determine if the given number is a power of some non-negative integer.

function isPower(n) {
    //Handle edge case.
    if(n === 1) return true;
    
    //Find all factors of n
    let factors = [];
    let max = n;
    for(let i = 2; i < max; i++) {
        if(n % i === 0) {
            factors.push(i);
            factors.push(n / i);
            max = n / 1;
        }
    }
    //Sort the factors.
    factors.sort((a, b) => a - b);
    
    //For all factors, and as long as the current factor times itself is not larger than n, see if we can equal n by multiplying that factor repeatedly. If so, return true
    for(let i = 0; i < factors.length; i++) {
        let currentProduct = factors[i];
        while(currentProduct * factors[i] <= n) {
            currentProduct *= factors[i];
            if(currentProduct === n) return true;
        }
    }
    
    //Once we have gone through all factors, return false.
    return false;
}
