//Given array of integers, find the maximal possible sum of some of its k consecutive elements.

function arrayMaxConsecutiveSum(inputArray, k) {
    //Keep track of the max sum.
    let maxSum = 0;
    //Go through each character, before going out of bounds based on k.
    for(let i = 0; i < inputArray.length - k + 1; i++) {
        //If k is greater than 1, add the next two elements (otherwise, just make this total the element value itself)
        let thisTotal = k > 1 ? inputArray[i] + inputArray[i + 1] : inputArray[i];
        for(let j = i + 2; j < i + k; j++) {
            //If k is greater than 2, continue to add to the total within this range of k.
            thisTotal += inputArray[j];
        }
        //See if this total is greater than the max.
        if(thisTotal > maxSum) maxSum = thisTotal;
    }
    return maxSum;
}
