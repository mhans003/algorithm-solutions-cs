/*
You are given an integer n.

Each number from 1 to n is grouped according to the sum of its digits.

Return the number of groups that have the largest size.
*/

var countLargestGroup = function(n) {
    //Keep track of groups.
    let groups = {};
    
    for(let i = 1; i <= n; i++) {
        if(i > 9) {
            //If this number is larger than 9 (more than one digit), add the digits up.
            let digitSum = i.toString().split("").reduce((a, b)  => parseInt(a) + parseInt(b), 0);
            //Check if there is already a group for this sum. If so, add to it, otherwise create it.
            if(groups[digitSum]) {
                groups[digitSum].push(i);
            } else {
                groups[digitSum] = [i];
            }
        } else {
            //If this number is less than 10, we already know we need to create the group.
            groups[i] = [i];
        }
    }
        
    //Find the largest array length, and return the number of groups with that length.
    let largestCount = Object.values(groups).sort((a, b) => b.length - a.length)[0].length;
    return Object.values(groups).filter(group => group.length === largestCount).length;
};