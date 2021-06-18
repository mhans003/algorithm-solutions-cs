/*
Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.
*/
function squareDigitsSequence(a0) {
    //Keep track of total.
    let count = 0;
    //Starting value is also the current.
    let current = a0;
    //Keep track of numbers in the sequence (used to check for repeats)
    let found = [];
    //As long as the new 'current' value is not already in the array, keep generating numbers (always do the first one).
    do {
        //Save the current value.
        found.push(current);
        //Add to the count.
        count++;
        //Split the current value into squared digits and add (this is the new current).
        current = String(current).split("").reduce((total, thisDigit) => {
            return total += (Number(thisDigit * Number(thisDigit)));
        }, 0);
    } while(!found.find(value => value === current));
    //Return the total count (plus the last iteration).
    return count + 1;
}