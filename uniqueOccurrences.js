/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.
*/

var uniqueOccurrences = function(arr) {
    //Record the number of occurrences of each item in the array.
    let occurrences = {};
    arr.forEach(item => {
        if(occurrences[item]) {
            occurrences[item]++;
        } else {
            occurrences[item] = 1;
        }
    });

    //Loop through each number of occurrences. 
    let uniqueOccurrences = [];
    for(let occurrencesOfItem in occurrences) {
        //If this number of occurrences is already in the object map, return false.
        if(uniqueOccurrences.includes(occurrences[occurrencesOfItem])) return false;
        //Otherwise, store this as a unique occurrences.
        uniqueOccurrences.push(occurrences[occurrencesOfItem]);
    }
    
    return true;
};