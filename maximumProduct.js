/*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
*/

var maximumProduct = function(nums) {
    //Sort the array.
    nums.sort((a,b) => a - b);
    
    //Get the product of the first two elements AND the very last element
    //This will potentially multiply the first two negatives (to make a positive) with the largest positive at the end
    let beginningProduct = nums[0] * nums[1] * nums[nums.length - 1];
    //This will multiply the largest 3 elements.
    let endProduct = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    
    //See which combination of elements multiply to larger product.
    return Math.max(beginningProduct, endProduct);
};