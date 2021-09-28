/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.
*/
function avoidObstacles(inputArray) {
    let maxAmount = Math.max(...inputArray);
    for(let i = 2; i < inputArray.length + i - 1; i++) {
        
        let isValid = true;
        
        for(let j = 0; j < maxAmount + i; j += i) {
            if(inputArray.some(element => element === j)) {
                isValid = false;
            }
        }
        
        if(isValid) return i;
    }
    
    return null;
}
