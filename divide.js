/*
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.
*/

var divide = function(dividend, divisor) {
    //Split up the numbers of the dividend into an array (keep as string for easy concatenation; Conversions to number happen after)
    let dividendArray = Math.abs(dividend).toString().split("");
    //Ignore negatives for the bulk of the logic.
    let absDivisor = Math.abs(divisor);
    //Save if quotient will be negative for after logic.
    let isNeg = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0) ? true : false;
    //Store quotient as individual digits.
    let quotient = [];
    
    //As long as the divisor is less/equal to the number LEFT to be divided, OR there are extra remainders to deal with (this will prevent missing 0s at the end of quotient from occurring)
    while(absDivisor <= dividendArray.map(digit => Number(digit)).join("") || dividendArray.length > 1) {
        //Used to find/store this digit of the quotient (this iteration only gives one single digit quotient).
        let current = 0;
        let quotientDigit = 0;
        
        //Get the number to divide in this iteration.
        let currentDividend = Number(dividendArray[0]) < absDivisor ? 
            Number(dividendArray.shift() + dividendArray.shift()) :
            Number(dividendArray.shift());
        
        //Get this quotient digit (counting up instead of dividing)       
        while(current + absDivisor <= currentDividend) {
            quotientDigit++;
            current += absDivisor;
        }
        
        //Save this quotient digit.
        quotient.push(quotientDigit);
        
        //Push the remainder back into the beginning of the dividendArray (for next step in division).
        dividendArray.unshift((currentDividend - current));      
    }
    //Deal with negative is necessary.
    let result = isNeg ? -(Number(quotient.join(""))) : Number(quotient.join(""));
    
    //Deal with numbers out of bounds.
    return result > 2147483647 ? 
        2147483647 :
        result < -2147483648 ?
        -2147483648 :
        result; 
};