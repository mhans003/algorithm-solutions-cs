//You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

//Return the value of 2position_of_the_found_bit (0-based).

function differentRightmostBit(n, m) {
    //Handle edge case (difference is only 1, then move on to other cases)
    //Take binary versions of both numbers:
    //Taking the first (n), filter it into array down to only values.
    //Where there are null values, put a placeholder value of 999 so that 
    //next map can run.
    //Final map function sees if every element is 999. If so, we know 
    //That the element we are looking for is out of bounds of this array, and specifically 
    //has the next unique bit in the next spot (so we use the length of the smaller number in binary form)
    //Finally, we take the resulting array and use Math.min to find the smallest index,
    //Making sure to spread the values out with ...
    return m - n === 1 ? 1 : 2 ** Math.min(...(n.toString(2)
    .split("")
    .reverse()
    .map((bit, index) => {
        if(bit !== m.toString(2).split("").reverse()[index]) {
            return index;
        }
    })
    .map((element, index, array) => {
        //Filter out null values.
        return element ? element : 999;
    })
    .map((number, index, array) => {
        console.log(array);
        if(array.every(element => element === 999)) {
            return m.toString(2).length > n.toString(2).length ? 
            m.toString(2).length - 1 :
            n.toString(2).length - 1;
        } else {
            return number;
        }
    })
    ));
}
  