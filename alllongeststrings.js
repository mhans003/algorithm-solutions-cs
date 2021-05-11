/*
Given an array of strings, return another array containing all of its longest strings.
*/

function allLongestStrings(inputArray) {
    var newArray = []; 
    let longestLength = 0; 
    //Get the longest length
    inputArray.forEach((str) => {
        if(str.length > longestLength) {
            longestLength = str.length; 
        }
    }); 
    //Fill with the new items 
    inputArray.forEach((str) => {
        if(str.length === longestLength) {
            newArray.push(str); 
        }
    }); 
    return newArray; 
}
