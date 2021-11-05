/*
A noob programmer was given two simple tasks: sum and sort the elements of the given array
a = [a1, a2, ..., an]. He started with summing and did it easily, but decided to store the sum he found in some random position of the original array which was a bad idea. Now he needs to cope with the second task, sorting the original array a, and it's giving him trouble since he modified it.

Given the array shuffled, consisting of elements a1, a2, ..., an, a1 + a2 + ... + an in random order, return the sorted array of original elements a1, a2, ..., an.
*/

function shuffledArray(shuffled) {
    //Store the index where the sum is located.
    let sumIndex = 0;
    //Find the sum of all elements, with the correct sum included.
    let shuffledSum = shuffled.reduce((a, b) => a += b, 0);
    for(let i = 0; i < shuffled.length; i++) {
        //Loop through each element, taking the number away from the shuffled sum, seeing if it is the sum.
        if(shuffledSum - shuffled[i] === shuffled[i]) {
            //Store the correct sum
            sumIndex = i;
            break;
        }
    }
    //Remove the sum from the shuffled array.
    shuffled.splice(sumIndex, 1)
    //Return the sorted array.
    return shuffled.sort((a, b) => a - b);
}
