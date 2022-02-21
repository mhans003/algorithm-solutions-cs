//Generate all permutations of an array of integers

function permutations(nums) {
    //Store the combinations of this array.
    let combinations = [];

    //End recursion
    //If there are no numbers left or only one, return
    if(!nums.length) return [];
    if(nums.length === 1) return [nums];

    for(let i = 0; i < nums.length; i++) {
        //Set aside the first number in this iteration.
        const currentNum = nums[i];

        //Retreive the remaining items as a sub array.
        const remainingNums = [...nums.slice(0, i), ...nums.slice(i + 1)];

        //Make recursive call with this remaining array (one element removed)
        const remainingNumsPermuted = permutations(remainingNums);

        //Iterate through remaining items array 
        for(let j = 0; j < remainingNumsPermuted.length; j++) {
            //Combine the current number with this combination of the remaining elements
            const permutedArray = [currentNum, ...remainingNumsPermuted[j]];

            //console.log("Combining " + currentNum + " with " + remainingNumsPermuted[j])

            //Save this combination
            combinations.push(permutedArray);
        }
    }

    return combinations;
}