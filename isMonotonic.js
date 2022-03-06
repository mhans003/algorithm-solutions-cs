/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
*/

var isMonotonic = function(nums) {
    //Keep track of the first difference found (whether positive or negative)
    let difference;
    
    for(let i = 1; i < nums.length; i++) {
        //See if this difference is positive or negative (will be used to determine if consistent with main difference)
        let thisDifference = nums[i] - nums[i - 1];
        //If no difference is yet stored, save the current difference.
        if(!difference) {
            difference = thisDifference;
        } else {
            //If the current difference is not the same polarity (neg/pos) as the main difference, return false.
            if(!((difference >= 0 && thisDifference >= 0) || (difference <= 0 && thisDifference <= 0))) {
                return false;
            }
        }
    }
    
    return true;
};