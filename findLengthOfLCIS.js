/*
Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.
A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].
*/

var findLengthOfLCIS = function(nums) {
    //Keep track of current count and longest count.
    let current = 1;
    let longest = 1;
    
    for(let i = 1; i < nums.length; i++) {
        //Continue counting if continuous.
        if(nums[i] > nums[i - 1]) {
            current++;
        } else {
            //Otherwise, store new longest sequence if necessary, and reset current sequence count.
            longest = Math.max(longest, current);
            current = 1;
        }
    }
    
    //Return length of longest subsequence
    return Math.max(current, longest);
};