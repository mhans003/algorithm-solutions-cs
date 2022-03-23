/*
Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

The digit sum of a positive integer is the sum of all its digits.
*/

var countEven = function(num) {
    //If current number is odd, just divide by 2 and floor to find number of integers that work. 
    return num % 2 ?
        Math.floor(num / 2) :
            //If number is even, see if its digit sum is odd. If so, subtract one from quotient, otherwise just divide by 2.
            num.toString().split("").reduce((sum, num) => sum += Number(num), 0) % 2 ?
            num / 2 - 1 :
        num / 2;           
};