/* 
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

var searchInsert = function(nums, target) {
    if(nums.includes(target)) return nums.indexOf(target);
    //If target is not already part of nums, put it in the array, sort it, and return the index.
    nums.push(target);
    nums.sort((a,b) => a - b);
    return nums.indexOf(target)
};