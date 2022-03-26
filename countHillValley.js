/*
You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

Return the number of hills and valleys in nums.
*/

var countHillValley = function(nums) {
    let count = 0;
    let last = null;
    let hill = false;
    let valley = false;
    
    nums.forEach((num, index) => {
        //If there is a last number (not the first), run comparison logic.
        if(last) {
            //Count a confirmed hill or valley (as marked in last iteration)
            if(hill) {
                //If it's a confirmed hill, reset the value and add to count.
                if(num < last) count++;
                if(num !== last) hill = false;
            } else if(valley) {
                //If it's a confirmed valley, reset the value and add to count.
                if(num > last) count++;
                if(num !== last) valley = false;
            }
            
            //See if this number is greater (possible hill) or less (possible valley) than the last. Will need to be confirmed next iteration.
            if(num > last) {
                hill = true;
            } else if(num < last) {
                valley = true;
            }
        } 
        //Save this number as the last number for the next iteration.
        last = num;
    });
    
    return count;
};