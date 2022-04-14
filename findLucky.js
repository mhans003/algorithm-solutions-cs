/*
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.
*/

var findLucky = function(arr) {
    //Sort the array (to reduce number of iterations) 
    arr.sort((a, b) => b - a);
    
    let current = null
    let currentCount = 0;
    
    while(arr.length) {
        let thisEl = arr.shift();
        
        //See if removed element is the same as the previous one(s)
        if(thisEl !== current) {
            //If not, see if the count of the previous element being counted is 'lucky'
            if(current === currentCount) return current;
            
            //If not lucky, reset the current count and update current.
            current = thisEl;
            currentCount = 0;
        } 
        
        //Regardless, increment count of current element
        currentCount++;
    }
    
    //Check if last number counted is lucky.
    if(current === currentCount) return current;
    
    return -1;
};