/*
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.
*/

function digitDegree(n) {
    //Copy string representation of this number.
    let currentNumber = String(n);
    let iterations = 0;
    //Iteratively split the number into digits, add them together, and see if this new number is one digit.
    while(currentNumber.length > 1) {
        iterations++;
        let digitArray = currentNumber.split("");
        let sum = 0;
        for(let i = 0; i < digitArray.length; i++) {
            sum += Number(digitArray[i]);
        }
        currentNumber = String(sum);
    }
    return iterations;
}
