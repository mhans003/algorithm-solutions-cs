/*
Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.
*/

var binaryGap = function(n) {
    let greatestDistance = 0;
    let currentDistance = 0;
    
    //Create a binary representation of the integer.
    let binaryString = n.toString(2);
    
    //Iterate through every bit.
    for(let i = 0; i < binaryString.length; i++) {
        if(binaryString[i] === "1") {
            //Only count this distance if this "1" is not the first character.
            if(i !== 0) currentDistance++;
            //See if this gap is the new greatest.
            greatestDistance = currentDistance > greatestDistance ? currentDistance : greatestDistance;
            //Reset the gap.
            currentDistance = 0;
        } else {
            //If this is a "0" then add to the distance.
            currentDistance ++;
        }
    }
    
    return greatestDistance;
};