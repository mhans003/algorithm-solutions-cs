/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

var singleNumber = function(nums) {
    let numMap = {};
    nums.forEach(num => {
        if(numMap[num]) {
            numMap[num]++
        } else {
            numMap[num] = 1;
        }
    });
    for(let num in numMap) {
        if(numMap[num] === 1) return num;    
    }
};