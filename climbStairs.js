/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

var climbStairs = function(n) {
    //Since this pattern essentially can be simplified to the fibonacci sequence, start with 0 and 1. 
    let num1 = 0;
    let num2 = 1;
    //Until we reach the destination n, repeatedly add the last two elements.
    for(let i = 1; i < n; i++) {
        let nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
    //Finally, return the last 2 elements. This will be the number of combinations of 1 and 2 steps.
    return num1 + num2;
};