/*
Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
After the algorithm has finished, there will be a single element left in the array. Return that element.
*/

function arrayConversion(inputArray) {
    //Keep track of the 'current' ouput array, which starts as the input.
    let output = inputArray;
    //Keep track of whether values are being added nor not.
    let add = true;
    while(output.length > 1) {
        //Build a new array.
        let thisArray = [];
        //For each element, decide whether to add or multiply the next two values.
        for(let i = 0; i < output.length; i += 2) {
            if(add) {
                thisArray.push(output[i] + output[i + 1]);
            } else {
                thisArray.push(output[i] * output[i + 1]);
            }
        }
        //Toggle add/multiply and reset array.
        add = !add;
        output = thisArray;
    }
    //Return the first/only array value.
    return output[0];
}