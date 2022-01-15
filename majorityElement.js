/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

var majorityElement = function(nums) {
    //Create an object to hold all values that appear in the array.
    let numsMap = {};
    //Map out the number of occurrences of each value.
    nums.forEach(num => {
        if(numsMap[num]) {
            numsMap[num]++;
        } else {
            numsMap[num] = 1;
        }
    });
    //Using the object, get all object keys (numbers that appear) into an array, 
    //Then, reduce the array down to the one with the largest value.
    return Object.keys(numsMap)
        .reduce((prev, current) => numsMap[prev] > numsMap[current] ? prev : current);
};