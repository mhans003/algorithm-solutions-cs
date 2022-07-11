/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/

var subsets = function(nums) {
    //Create an initial empty output (2D array format)
    let output = [[]];
    
    //Only look at one number at a time in the original array.
    nums.forEach(num => {
        //Assume we are creating a new empty subset (this will eventually be incorporated into output)
        let subset = [];
        
        //For each existing subset, add the next number from the original array into all existing subsets.
        output.forEach(existingSubset => {
            subset.push([...existingSubset, num]);
        });
        
        //Push in bulk all the new subsets with the new number added, ready for next iteration.
        output.push(...subset);
    });
    
    return output;
};