/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

var pivotIndex = function(nums) {
    //Loop through every possible index.
    for(let i = 0; i < nums.length; i++) {
        //Split the array into two parts (not including current index i), and sum up the values.
        let leftSum = nums.slice(0, i).reduce((a, b) => a += b, 0);
        let rightSum = nums.slice(i + 1).reduce((a, b) => a += b, 0);
        //If these sums are the same, return the index number.
        if(leftSum === rightSum) return i;
    }
    return -1;
};