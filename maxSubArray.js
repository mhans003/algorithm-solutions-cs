/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/

var maxSubArray = function(nums) {
    //Start at the beginning
    let maxSum = nums[0];
    let currentSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        //Since two consecutive negative numbers will never result in the larger sum, reset the current sum if it is negative.
        if(currentSum < 0) currentSum = 0;
        //Add the next number
        currentSum += nums[i];
        //Determine if we continue building the current sum or default to the existing max sum. 
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};