/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
*/

function arrayChange(inputArray) {
    let totalCount = 0;
    //Start with the beginning of the array.
    let currentVal = inputArray[0];
    
    for(let i = 1; i < inputArray.length; i++) {
        //Go through each element, compare to last element, and increment if needed (include in the total count)
        while(inputArray[i] <= currentVal) {
            inputArray[i] = inputArray[i] + 1;
            totalCount++;
        }
        
        //Store this new element as the one to compare to next.
        currentVal = inputArray[i];
    }
    
    //Return total number of increments.
    return totalCount;
}
