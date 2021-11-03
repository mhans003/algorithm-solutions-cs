//Given an integer n, return the largest number that contains exactly n digits.

function largestNumber(n) {
    let count = 0;
    let output = "";
    //Iteratively add a 9 to the output n times and return it as a number.
    while(count < n) {
        output += "9";
        count++;
    }
    return Number(output);
}
