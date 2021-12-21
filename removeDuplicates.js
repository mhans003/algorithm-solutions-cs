//Remove array duplicates in-place.

var removeDuplicates = function(nums) {   
    let i = 0;
    //As long as the end of the array is not reached, remove one element if the next is a duplicate.
    while(i < nums.length - 1) {
        if(nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            console.log(nums);
        } else {
            i++;
        }
    }
}