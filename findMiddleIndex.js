/*
Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.
*/

var findMiddleIndex = function(nums) {
    let arrayRight = nums.reduce((prev, current) => prev += current, 0);
    let arrayLeft = 0;
    
    for(let i = 0; i < nums.length; i++) {
        //Remove this current middle element from the count
        let thisArrayRight = arrayRight - nums[i];
        
        //See if the left and right have the same sum. If so, return index.
        if(thisArrayRight === arrayLeft) return i;   
            
        //Move this current index into the left side of the middle and away from the right side.
        arrayRight -= nums[i];
        arrayLeft += nums[i];
    }
    
    //If loop did not return any index, return -1.
    return -1;
};