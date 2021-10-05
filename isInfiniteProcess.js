/*
Given integers a and b, determine whether the following pseudocode results in an infinite loop

while a is not equal to b do
  increase a by 1
  decrease b by 1
Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.
*/

function isInfiniteProcess(a, b) {
    //Is a greater than b? If so, it is already infinite.
    return a > b ? 
    true : 
    //Otherwise, is a equal to b? If so, this is not infinite.
    a === b ? 
    false : 
    //Otherwise, does the difference between b and a result in an odd number greater than 0? 
    //If so, it is infinite. Otherwise, it is not.
    b - a > 0 && (b - a) % 2 === 1 ? 
    true : 
    false;
}
