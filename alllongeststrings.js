/*
Given an array of strings, return another array containing all of its longest strings.
*/

function allLongestStrings(inputArray) {
    const longestLength = Math.max(...inputArray.map(element => element.length));
    return inputArray.filter(element => element.length === longestLength);
}
