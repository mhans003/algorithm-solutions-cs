//Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function(nums) {
    //At any point, keep track of the max number of 1s so far and the number of 1s in the current group.
    let max = 0;
    let current = 0;
    
    //Iterate through every num.
    nums.forEach((num, index) => {
        if(num === 1) {
            current++;
        } else {
            //When a zero is encountered, reset the current and see if this is the new max.
            max = Math.max(max, current);
            current = 0;
        }
    });
    //Return the max (or in the case of the last element being 1, return current if it's larger)
    return Math.max(max, current);
};