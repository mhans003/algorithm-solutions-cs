/*
Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.
*/

function stringsRearrangement(inputArray) {
    //Create a helper function to find all permutations of these strings.
    const createPermutations = inputArray => {
        let permutations = [];
        
        const permutation = (inputArr, m = []) => {
            //When this is first called, 'm' is an empty array.
            if(inputArr.length === 0) {
                //Once the array is empty, we know we are ready to 'unwind' recursion.
                permutations.push(m);
            } else {
                //Loop through every string element in the array.
                for(let i = 0; i < inputArr.length; i++) {
                    //Take a copy of the current array
                    let currentArray = inputArr.slice();
                    //Take out an element from the array and save it.
                    let nextElement = currentArray.splice(i, 1);
                    permutation(currentArray.slice(), m.concat(nextElement));
                }
            }
        }
        permutation(inputArray);
        
        return permutations;
    };
    
    let allPermutations = createPermutations(inputArray);
    
    //Go through each permutation and check if any change by exactly one character each iteration
    
    for(let i = 0; i < allPermutations.length; i++) {
        //Loop through every string in this permutation
        console.log(`Looping through permutation ${allPermutations[i]}`)
        for(let j = 0; j < allPermutations[i].length - 1; j++) {
            //Compare the characters in the string at this index (j) to the characters in the string at the next index (j + 1), and keep track of how many differences there are.
            let differences = 0;
            for(let k = 0; k < allPermutations[i][j].length; k++) {
                if(allPermutations[i][j][k] !== allPermutations[i][j + 1][k]) {
                    differences++;
                }
            }
            console.log(differences);
            if(differences !== 1) {
                break;
            } 
            
            //If we have reached the end of this permutation with only one difference between each string, we found a working set.
            if(j === allPermutations[i].length - 2) {
                return true;
            }
        }
    }
   return false;
}
