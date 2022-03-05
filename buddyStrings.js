/*
Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
*/

var buddyStrings = function(s, goal) {
    //If s already equals goal, see if two characters can be swapped around anyway to still result in equal strings.
    if(s === goal) {
        let charMap = {};
        for(let i = 0; i < s.length; i++) {
            if(charMap[s[i]]) {
                charMap[s[i]]++;
            } else {
                charMap[s[i]] = 1;
            }
        }
        //If any character exists more than once, then we can swap those two instances.
        if(Object.values(charMap).some(count => count > 1)) return true;
        return false;
    }
    
    //Otherwise, if the strings are different, look for two characters that can be swapped.
    let swapIndex1;
    let swapIndex2;
    let swapChar1;
    let swapChar2;
    
    //Loop through each character in s, finding the first two different characters.
    for(let i = 0; i < s.length; i++) {
        if(swapIndex1 && swapIndex2) {
            break;
        }

        //Save the first two different character indexes/values.
        if(s[i] !== goal[i]) {
            if(swapIndex1 === undefined) {
                swapIndex1 = i;
                swapChar1 = s[i];
            } else if (swapIndex2 === undefined) {
                swapIndex2 = i;
                swapChar2 = s[i];
            }
        }
    }
    
    //If there is not more than one different character, we can't swap any.
    if(swapIndex1 === undefined || swapIndex2 === undefined) return false;
    
    //Create a new string with the swapped characters.
    let result = s.split("");
    result[swapIndex1] = swapChar2;
    result[swapIndex2] = swapChar1;
    result = result.join("");
    
    //Compare the 'swapped' string to the goal.
    if(result === goal) return true;
    return false;
};