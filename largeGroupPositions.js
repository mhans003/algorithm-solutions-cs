/*
In a string s of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".

A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].

A group is considered large if it has 3 or more characters.

Return the intervals of every large group sorted in increasing order by start index.
*/

var largeGroupPositions = function(s) {
    //Save the current group and character in that group.
    let currentGroup = [];
    let currentChar;
    //Store all groups greater than lengths of 3.
    let groups = [];
    
    for(let i = 0; i < s.length; i++) {
        //If this character is the same as the last one, add to the end index.
        if(s[i] === currentChar) {
            currentGroup[1]++;
        } else {
            //Otherwise, create a new group
            //First, see if this group has a length of 3 or more and store it if so.
            if(currentGroup.length) {
                if(currentGroup[1] - currentGroup[0] >= 2) {
                    groups.push(currentGroup);
                }
            }
            //Reset the current group.
            currentChar = s[i];
            currentGroup = [i, i]
        }
    }
    //If the last group created has a length of 3 or more, store it.
    if(currentGroup.length) {
        if(currentGroup[1] - currentGroup[0] >= 2) {
            groups.push(currentGroup);
        }
    }
    
    return groups;
};