/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

var reverse = function(x) {
    //Retrieve the digits in character form.
    let digits = x.toString().split("").reverse();
    
    //If a negative sign is present, mark isNeg as true.
    let isNeg = digits.includes("-") ? true : false;
    
    //Reverse the number if it is within the 'safe' range specified (otherwise 0)
    let output = parseInt(digits.join("")) > 2147483647 ?
        0 :
        parseInt(digits.join(""));
    
    //Return negative if necessary.        
    return isNeg ? output * -1 : output;  
};