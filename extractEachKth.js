//iven array of integers, remove each kth element from it.

function extractEachKth(inputArray, k) {
    //Save the current index to represent the amount of skips between each number.
    let index = k - 1;
    
    //While we still have elements to work with within that skip range, remove the next element from the correct position and update the new skip index.
    while(index < inputArray.length) {
        inputArray.splice(index, 1);
        index += k - 1;
    }
    
    return inputArray;
}
