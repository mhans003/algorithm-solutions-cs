/*
Consider a string containing only letters and whitespaces. It is allowed to replace some (possibly, none) whitespaces with newline symbols to obtain a multiline text. Call a multiline text beautiful if and only if each of its lines (i.e. substrings delimited by a newline character) contains an equal number of characters (only letters and whitespaces should be taken into account when counting the total while newline characters shouldn't). Call the length of the line the text width.

Given a string and some integers l and r (l ≤ r), check if it's possible to obtain a beautiful text from the string with a text width that's within the range [l, r].
*/

function beautifulText(inputString, l, r) {
    //Loop through all ranges within l -> r.
    for(let i = l; i <= r; i++) {
        //See if all of these indexes within this range of characters has a space at the end
        //Keep track of the offset(number of times to skip over spaces) and the current index, based on the current length.
        let offset = 0;
        let currentIndex = i;
        //Check if all indexes within this size range are spaces.
        while(inputString[currentIndex + offset] === " ") {
            //Add this iteration to the offset
            offset++;
            //If we have reached the last possible space, make sure this splits the string into 3 strings of the same length.
            if(currentIndex + offset + i >= inputString.length - 1) {
                if((inputString.length - offset) / (offset + 1) === i) return true;
            }
            //Move on to next index within this range.
            currentIndex += i;
        }
    }
    
    return false;
}
