/*
Define crossover operation over two equal-length strings A and B as follows:

the result of that operation is a string of the same length as the input strings
result[i] is either A[i] or B[i], chosen at random
Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the crossover operation over them may be equal to result.

Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).
*/

function stringsCrossover(inputArray, result) {
    let count = 0;
    //Loop through each string element.
    for(let i = 0; i < inputArray.length; i++) {
        //For each string element, loop through all other strings.
        for(let j = 0; j < inputArray.length; j++) {
            //Skip this iteration of j if the two strings being compared are the same.
            if(i === j) continue;
            //Compare each of the characters in these two strings in a loop
            let valid = true;
            for(let k = 0; k < inputArray[i].length; k++) {
                //Check if either character being compared is equal to this index of the result string.
                //If neither of the characters equal the target character, this combination doesn't work.
                if(!(inputArray[i][k] === result[k]) && !(inputArray[j][k] === result[k])) {
                    //At any point, if this doesn't work, mark this as false. 
                    valid = false;
                }
            }
            //If this is a true match, add one to the overall count and continue.
            if(valid) {
                console.log(`Valid pair: ${inputArray[i]} and ${inputArray[j]}`)
                count++;
            }        
        }
    }
    //Return the number of pairs, but halved since we don't count diplicates in a different order.
    return count / 2;
}