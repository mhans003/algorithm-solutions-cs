/*
We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.
*/

function rounders(n) {
    //Keep track of current number and get the number of loops based on integer length.
    let currentNumber = n;
    let numRounds = String(n).length - 1;
    
    //For each iteration, use each value of i to generate the power of ten we are using.
    for(let i = 0; i < numRounds; i++) {
        let powerOfTen = 10 ** (i + 1);
        //We have to divide by a power of ten to make this number non-whole to round and update.
        currentNumber = Math.round(currentNumber / powerOfTen) * powerOfTen;
    }
    
    return currentNumber;
}