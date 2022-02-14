/*
You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.
*/

function rangeBitCount(a, b) {
    //Create the range of numbers in binary.
    let binary = [];
    for(let i = a; i <= b; i++) {
        binary.push(i.toString(2));
    }
    //Go through each binary representation and add up the number of "1"s.
    let total = 0;
    for(let i = 0; i < binary.length; i++) {
        let thisNumber = String(binary[i])
        for(let j = 0; j < binary[i].length; j++) {
            if(thisNumber[j] === "1") total++;
        }
    }
    return total;
}
