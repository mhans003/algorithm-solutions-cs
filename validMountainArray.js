/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
*/

var validMountainArray = function(arr) {
    //We assume array will start increasing.
    let isIncreasing = true;
    
    //Loop through every number (starting with second element) to compare using subtraction.
    for(let i = 1; i < arr.length; i++) {
        //If this is the 'increasing' block, ensure that it is increasing.
        if(isIncreasing) {
            if(arr[i] - arr[i - 1] < 1) {
                //If we find it is not increasing, return false if this is the first comparison or if we are finding a 'flat' part of the array (difference is 0).
                if(i === 1 || arr[i] - arr[i - 1] === 0) return false;
                //Otherwise, we assume this is now the decreasing part of the array.
                isIncreasing = false;
            }
        } else {
            //We are assuming this is the decreasing part of the array, so if we find something that is not decreasing, return false.
            if(arr[i] - arr[i - 1] > -1) return false;
        }
    }
    
    //If we have reached the outside of the loop at it is still increasing, return false.
    if(isIncreasing) return false;
    return true;
};