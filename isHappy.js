/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

var isHappy = function(n) {
    let current = n;
    let attempted = [];
    
    //This must run at least once, so use do while (so that condition is met on first run)
    do {
        //Split current number into digits and square.
        let digits = current.toString().split("").map(digit => Number(digit));
        //Add sums of each digit
        let sum = digits.reduce((runningSum, current) => runningSum += current * current, 0);
        //Exit loop early if this number was already found.
        if(attempted.includes(sum)) break;
        //Check if this number is happy
        if(sum === 1) return true;
        //Update current number and store this number as attempted
        current = sum;
        attempted.push(current);
    } while(current !== n)
        
    return false;
};