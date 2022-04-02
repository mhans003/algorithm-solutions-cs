/*
Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
*/

var buildArray = function(nums) {
    //Create anew array for output.
    let result = new Array(nums.length).fill(0);
    
    //Using formula, move this element to correct spot of result.
    for(let i = 0; i < nums.length; i++) {
        result[i] = nums[nums[i]];
    }
    
    return result;
};