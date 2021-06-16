/*
We define the middle of the array arr as follows:

if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not.
*/

function isSmooth(arr) {
    return arr.length % 2 ?
    //If the array is odd, just get middle element.
    arr[0] === arr[arr.length - 1] && arr[0] === arr[Math.floor(arr.length / 2)] ?
    true : 
    false :
    //If the array is even, get the middle two elements' sum.
    arr[0] === arr[arr.length - 1] && arr[0] === arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2) - 1] ?
    true :
    false;
}