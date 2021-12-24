/*
Remove every instasnce of element val from array nums in-place. 
*/

var removeElement = function(nums, val) {
    //NOTE: Does not return array (modifies in-place).

    //Go through each index of nums (do not increment i by default at each iteration).
    for(let i = 0; i < nums.length;) {
        //Check if element is equal to val.
        if(nums[i] === val) {
            //Remove the element, but keep the index the same.
            nums.splice(i, 1);
        } else {
            //Otherwise, increment the index counter.
            i++;
        }
    }
};