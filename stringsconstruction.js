/*
Given two strings a and b, both consisting only of lowercase English letters, your task is to calculate how many strings equal to a can be constructed using only letters from the string b? Each letter can be used only once and in one string only.
*/

function stringsConstruction(a, b) {
    //Create character map for string b.
    let charMap = {};
    for(let i = 0; i < b.length; i++) {
        if(charMap[b[i]]) {
            charMap[b[i]]++
        } else {
            charMap[b[i]] = 1;
        }
    }
    //Keep track of number of strings created.
    let count = 0;
    //Start at index 0 (keep track of index we are currently at in building an instance of string a)
    let thisIndex = 0;
    //Build the string.
    let currentString = "";
    //As long as the desired character of string a is left in the character map of string b
    while(charMap[a[thisIndex]]) {
        //Add to the string.
        currentString += a[thisIndex];
        //See if we have reached the desired string. If so, increase count and reset the building string.
        if(currentString === a) {
            count++;
            currentString = "";
        }
        //Removed the used character from the character map and update the index we are at (update the loop).
        charMap[a[thisIndex]]--;
        thisIndex = thisIndex === a.length - 1 ? 0 : thisIndex + 1;
    }
    
    return count;
}
