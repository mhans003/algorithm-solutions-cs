/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
*/
function sortByHeight(a) {
    //Extract non -1 values
    let values = a.filter(value => value !== -1).sort((a, b) => a - b);
    //Loop through array, placing sorted values into place.
    return a.map(value => {
        //If this value is not -1, insert the next value in the sorted portions of the array.
        if(value !== -1) return values.shift();
        return value;
    });
}