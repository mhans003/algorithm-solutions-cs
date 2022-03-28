/*
You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

Sort the values at odd indices of nums in non-increasing order.
For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
Sort the values at even indices of nums in non-decreasing order.
For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
Return the array formed after rearranging the values of nums.
*/

var sortEvenOdd = function(nums) {
    //Split the nums array into even and odd indices, then sort.
    let odds = nums.filter((num, index) => {
        if(index % 2) return num;
    }).sort((a, b) => b - a);
    
    let evens = nums.filter((num, index) => {
        if(index % 2 === 0) return num;
    }).sort((a, b) => a - b);
    
    //Store another array to return the sorted result.
    let result = [];
    
    //Put the two arrays back together.
    let isEven = true;
    while(odds.length || evens.length) {
        if(isEven) {
            result.push(evens.shift());
        } else {
            result.push(odds.shift());
        }
        
        //Switch odd/even for next iteration.
        isEven = !isEven;
    }
    
    return result;
};