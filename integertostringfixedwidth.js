/*
Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.
*/

function integerToStringOfFixedWidth(number, width) {
    //If the number string is the same size, simply return string version.
    //If the number string is longer, return a substring trimming off the first characters until the sizes are equal.
    //If the number string is shorter, put 0s into the front by using array concat, filling with the correct number of 0s, then joining back into a string.
    return String(number).length === width ? 
    String(number) :
    String(number).length > width ?
    String(number).substr(String(number).length - width) :
    [].concat(...new Array(width - String(number).length).fill(0), String(number).split("")).join("");
}