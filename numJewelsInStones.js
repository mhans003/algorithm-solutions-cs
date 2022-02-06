/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

var numJewelsInStones = function(jewels, stones) {
    //Create object map of all types of jewels.
    let jewelsMap = {};
    jewels.split("").forEach(jewel => {
        if(!jewelsMap[jewel]) {
            jewelsMap[jewel] = 1;
        }
    });
    
    //Count the total number of jewels inside stones.
    let count = 0;
    stones.split("").forEach(stone => {
        if(jewelsMap[stone]) count++;
    });
    
    return count;
};