/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.
*/

var balancedStringSplit = function(s) {
    //Keep track of total splits and counts of how many R and L are currently in a given group.
    let count = 0;
    let currentRCount = 0;
    let currentLCount = 0;
     
    for(let i = 0; i < s.length; i++) {
        //Add to current group.
        if(s[i] === "R") {
            currentRCount++;
        } else if(s[i] === "L") {
            currentLCount++;
        }
        //Check for new group. If so, reset R and L count for next group.
        if(currentRCount === currentLCount && currentRCount > 0) {
            count++;
            currentRCount = 0;
            currentLCount = 0;
        }
    }
    
    return count;
};