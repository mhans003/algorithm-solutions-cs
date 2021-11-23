/*
A little boy is studying arithmetic. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

Given two integers, your task is to find the result which the little boy will get.
*/

function additionWithoutCarrying(param1, param2) {
    //Find longest string for the loop.
    let length = Math.max(String(param1).length, String(param2).length);
    //Make an array of each number.
    let num1 = String(param1).split("").reverse();
    let num2 = String(param2).split("").reverse();
    //Keep track of sum as an array of digits.
    let sum = [];
    //Until the end of the longest number, add the digits, but ignore the "carried" tens place.
    for(let i = 0; i < length; i++) {
        let addend1 = num1[i] ? Number(num1[i]) : 0;
        let addend2 = num2[i] ? Number(num2[i]) : 0;
        sum.unshift((addend1 + addend2) % 10);
    }
    //Put the array back together and return as a number.
    return Number(sum.join(""));
}
