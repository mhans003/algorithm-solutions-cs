/*
You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.
*/

var divideArray = function(nums) {
    //Sort the array.
    nums.sort((a, b) => a - b);
    
    //Start going through the array. At any point if next two numbers are not equal, return false.
    while(nums.length > 1) {
        //Remove the next two numbers.
        let num1 = nums.shift();
        let num2 = nums.shift();
        
        //Since they must come in even pairs, these must be the same.
        if(num1 !== num2) return false;
    }
    
    //If there is an element left (odd number), return false.
    if(nums.length) return false;
    return true;
};