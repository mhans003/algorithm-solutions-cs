/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function(s) {
    //Create pointers
    let left = 0; 
    let right = s.length - 1;
    
    //Using the beginning and end pointers, iterate down to the center of the array that represents the string, and swap values.
    while(left <= right) {
        //Swap the values.
        [s[left], s[right]] = [s[right], s[left]];
        
        //Update the pointer values.
        left++;
        right--;
    }
    
    return s;
};