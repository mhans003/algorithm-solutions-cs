/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.
*/

var hammingDistance = function(x, y) {
    //Convert to array.
    let larger = Math.max(x, y).toString(2).split("");
    let smaller = Math.min(x, y).toString(2).split("");
    
    //Add 0 bits to the beginning of the shorter array to make same length;
    while(smaller.length < larger.length) {
        smaller.unshift("0");
    }
    
    let hammingDistance = 0;
    
    for(let i = 0; i < smaller.length; i++) {
        //Check if this spot has different bits in each number.
        if(smaller[i] !== larger[i]) hammingDistance++;
    }
    
    return hammingDistance;
};