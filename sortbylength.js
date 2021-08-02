/*
Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.
*/

function sortByLength(inputArray) {
    //Create a mapping of all lengths and strings with that length (in order).
    let lengthMap = {};
    inputArray.forEach(string => {
        //See if an array for this length exists. If so, push to it. Otherwise, create it.
        if(lengthMap[string.length]) {
            lengthMap[string.length].push(string);
        } else {
            lengthMap[string.length] = [string];
        }
    });
    //For every length, spread out the array values in a new array to be returned.
    let sorted = [];
    for(let length in lengthMap) {
        sorted.push(...lengthMap[length]);
    }
    return sorted;
}
