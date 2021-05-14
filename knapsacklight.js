/*
You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?
*/
function knapsackLight(value1, weight1, value2, weight2, maxW) {
    //Use chained conditionals to first see if we can carry both items, then determine if either of the other values work (if so, choose the most valuable). Otherwise, return 0 (none of the items can be carried).
    return weight1 + weight2 <= maxW ? 
           value1 + value2 :
           weight1 <= maxW && weight2 <= maxW ?
           Math.max(value1, value2) :
           weight1 <= maxW ?
           value1 :
           weight2 <= maxW ?
           value2 :
           0;
}