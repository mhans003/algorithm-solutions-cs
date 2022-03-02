/*
You are given a binary array nums (0-indexed).

We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).

For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
Return an array of booleans answer where answer[i] is true if xi is divisible by 5.
*/

var prefixesDivBy5 = function(nums) {
    //Store booleans to return.
    let bools = new Array(nums.length).fill(false);
    
    //Store the integer value of the 'current' binary string built from original nums array.
    //Use BigInt for very large array inputs.
    let current = BigInt(0);
    
    //Create all integer values from beginning to end.
    for(let i = 0; i < nums.length; i++) {
        //Since this bit is being added, it shifts over all existing bits to left, so multiply value by 2.
        //If this bit is 1, add 1 to the value (it won't add anything if this bit is 0).
        current = (current * 2n) + BigInt(nums[i]);
        
        //If this value divides by 5 with no remainder, change the corresponding boolean to true.
        if(!(current % 5n)) bools[i] = true;
    }
    
    return bools;
};