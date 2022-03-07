/*
The array-form of an integer num is an array representing its digits in left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
*/

var addToArrayForm = function(num, k) {
    return (BigInt(num.join("")) + BigInt(k)).toString().split("").map(num => parseInt(num));
};