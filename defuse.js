/*
You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
*/

var defuse = function(code, k) {
    //Create empty array for result.
    let result = new Array(code.length).fill(0);
    
    //Return early if k === 0.
    if(k === 0) return result;
    
    //Loop through every number.
    for(let i = 0; i < code.length; i++) {
        //Keep track of this sum to use in the array.
        let thisSum = 0;
        
        //If k > 0, add following numbers.
        if(k > 0) {
            for(let j = 1; j <= k; j++) {
                //Use modulus to loop back to 0 if at the end.
                thisSum += code[(i + j) % code.length];
            }
        } else {
            //Otherwise, add previous numbers.
            for(let j = 1; j <= Math.abs(k); j++) {
                //Loop back around to the end if below index 0.
                thisSum += code[i - j >= 0 ? i - j : (i - j) + code.length];
            }
        }
        
        //Push this iteration's sum.
        result[i] = thisSum;
    }
    
    return result;
};