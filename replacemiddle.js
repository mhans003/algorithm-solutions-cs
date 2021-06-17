/*
We define the middle of the array arr as follows:

if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer.
*/

function replaceMiddle(arr) {
    return arr.length % 2 ?
    arr :
    arr.slice(0, Math.floor(arr.length / 2) - 1)
    .concat(arr[Math.floor(arr.length / 2) - 1] + arr[Math.floor(arr.length / 2)])
    .concat(arr.slice(Math.floor(arr.length / 2) + 1));
}