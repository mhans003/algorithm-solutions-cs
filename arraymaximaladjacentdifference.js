/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
*/

function arrayMaximalAdjacentDifference(inputArray) {
    let largestDifference = 0;
    
    //For every element, get the absolute value of the difference between it and its adjacent element.
    for(let i = 0; i < inputArray.length - 1; i++) {
        let thisDifference = Math.abs(inputArray[i + 1] - inputArray[i]);
        if(thisDifference > largestDifference) largestDifference = thisDifference;
    }
    
    //Return the largest difference.
    return largestDifference;
}