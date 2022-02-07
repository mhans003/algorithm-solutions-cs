/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].
*/

var selfDividingNumbers = function(left, right) {
    //Find all self-dividing numbers in the range.
    let numbers = [];
    for(let i = left; i <= right; i++) {
        //Check if this number is self-dividing.
        let thisNumber = i;
        let isSelfDividing = true;
        
        //Keep stripping last digit off current number and see if it divides this iteration i.
        while(thisNumber > 0 && isSelfDividing) {
            //Update the current number to get the next digit.
            let divisor = thisNumber % 10;
            thisNumber = Math.floor(thisNumber / 10);
            
            //If the number doesn't divide by thisNumber (or if zero), end this loop.
            if(divisor === 0 || i % divisor) isSelfDividing = false;
        }
        
        //If this line runs, this number is a self-dividing number.
        if(isSelfDividing) numbers.push(i);
    }
    return numbers;
};