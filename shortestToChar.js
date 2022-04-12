/*
Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.
*/

var shortestToChar = function(s, c) {
    //Find each occurrence of the target character c.
    let occurrences = [];
    s.split("").forEach((char, index) => {
        if(char === c) occurrences.push(index);
    });    
    
    //Save the distance of character c from each index.    
    let distances = [];
    
    //Start by pulling the first occurrence index of the character c to use as reference.
    let nearestIndex = occurrences.shift();
    
    //Go through each character in the string again to build the distances array.
    s.split("").forEach((char, index) => {
        //If there is still another occurrence index to check, check it against the current nearestIndex
        if(occurrences.length) {
            //Update the nearest index if it's now the closest one.
            if(Math.abs(index - occurrences[0]) < Math.abs(index - nearestIndex)) {
                nearestIndex = occurrences.shift();
            }
        }
        
        //Store the distance between the current index and which ever occurrence index is nearest.
        distances.push(Math.abs(index - nearestIndex));
    });
    
    return distances;
};