/*
Given an integer n, find the minimal k such that

k = m! (where m! = 1 * 2 * ... * m) for some integer m;
k >= n.
In other words, find the smallest factorial which is not less than n.
*/

function leastFactorial(n) {
    //Keep track of the current product and start with 1.
    let multiplier = 1, 
        currentProduct = multiplier;
        
    //Keep multiplying incrementing integers until reaching above the threshold.
    while(currentProduct < n) {
        currentProduct *= multiplier;
        multiplier++;
    }
    
    return currentProduct;
}