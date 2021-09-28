/*
Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.
*/

function arrayPreviousLess(items) {
    let output = items.map((item, index) => {
        //Traverse backwards in items from this position until we find (or not find) a value less than the current element.
        let thisElement = -1;
        //If we find one, replace -1 with that value.
        for(let i = index - 1; i >= 0; i--) {
            if(items[i] < item) {
                thisElement = items[i];
                break;
            }
        }
        return thisElement;
    }); 
    return output;
}
