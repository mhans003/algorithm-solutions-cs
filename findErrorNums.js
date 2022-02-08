/*
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.
*/

var findErrorNums = function(nums) {
    //Create a hash map representation of every present number in the array.
    let numberMap = {};
    nums.forEach(num => {
       if(numberMap[num]) {
           numberMap[num]++;
       } else {
           numberMap[num] = 1
       }
    });
    
    //Store the duplicated and missing elements (initially undefined)
    let duplicatedElement;
    let missingElement;
    
    //Loop through every number from 1 to the last number (would be the same as length).
    for(let i = 1; i <= nums.length; i++) {
        //If this number isn't present, it is missing. If the number is present more than once, it is duplicate.
        if(numberMap[i] > 1) duplicatedElement = i;
        if(!numberMap[i]) missingElement = i;
        
        //Once both the missing and duplicated element have been found, return.
        if(duplicatedElement && missingElement) return [duplicatedElement, missingElement];
    }
};