/*
You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

Return the value of 2position_of_the_found_pair (0-based).
*/

function equalPairOfBits(n, m) {
    return 2 ** n.toString(2)
    .split("")
    .reverse()
    .map((bit, index, array) => {
        //compare this bit and it's next neighbor with that of the other string m
        let m_bits = m.toString(2).split("").reverse();
        //If the pairs are equal, push those.
        if(bit === m_bits[index] && array[index + 1] === m_bits[index + 1]) {
            console.log("Values are equal")
            return index;
        }
        //Add the array length in case there are no matching pairs in the bits shown.
        if(index === array.length - 1) return array.length;
    })
    .filter((value, index, array) => {
        if(value === 0) return "0";
        if(value) return value;
    })
    .map((value, index, array) => {
        console.log(array);
        return value;
    })[0]
    ;
}
  
