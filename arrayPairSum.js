/*
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
*/

var arrayPairSum = function(nums) {
    //Sort the numbers from least to greatest
    nums.sort((a, b) => a - b);
    
    //Store the sum.
    let sum = 0;
    
    //Since these numbers are grouped by being sorted, add every other number.
    for(let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    
    return sum;
};