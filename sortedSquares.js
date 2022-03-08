//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function(nums) {
    //Square the numbers first and then sort the result array.
    return nums.map(num => num * num).sort((a, b) => a - b);
};