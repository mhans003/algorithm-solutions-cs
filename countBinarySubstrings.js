/*
Give a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.
*/

var countBinarySubstrings = function(s) {
    //Get all groups of numbers with ones and zeros. 
    let allGroups = [...getMainGroups(s, "0"), ...getMainGroups(s, "1")].filter(group => {
        if(group.includes("0") && group.includes("1")) return group;
    });
    
    //Add up the total number of combinations.
    return allGroups.reduce((prev, current) => {
        //For each group, count the number of 1s and 0s. The one with the smaller amount is the number of combinations in this group (e.g. 1100 would have 2 combinations: 1100 and 10)
        return prev += Math.min(
            current.split("")
            .filter(num => num === "1")
            .length, 
            current.split("")
            .filter(num => num === "0")
            .length
        ); 
    }, 0);
    
    //Helper function to extract groups of 1s and 0s.
    function getMainGroups(str, starterNum) {
        let groups = [];
        let thisGroup = "";
        //By default, start with the first half of this group (whether it be 1s or 0s)
        let firstHalf = true;
        
        for(let i = 0; i < str.length; i++) {
            if(firstHalf) {
                //If this is the first half, add to the group, and move to the second group if the character changed.
                thisGroup += str[i];
                if(str[i] !== starterNum) firstHalf = false;
            } else {
                //Otherwise, in the second half, add to this group, OR go back to a new group and push to the groups array.
                if(str[i] !== starterNum) {
                    thisGroup += str[i];
                } else {
                    firstHalf = true;
                    groups.push(thisGroup);
                    thisGroup = str[i]
                }
            }   
        }
        //Push last group.
        groups.push(thisGroup);
        
        return groups;
    }
};