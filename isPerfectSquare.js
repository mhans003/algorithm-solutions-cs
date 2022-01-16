/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.
*/

var isPerfectSquare = function(num) {
    //Start with a single unit length.
    let side = 1;
    //Incrementally increase the side length by 1, until we go over the desired area in square units.
    while(side * side <= num) {
        //If this side length results in the target area num, return true.
        if(side * side === num) return true;
        side++;
    }
    return false;
};