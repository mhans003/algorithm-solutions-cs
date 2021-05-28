//Define an integer's roundness as the number of trailing zeroes in it.

//Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

function increaseNumberRoundness(n) {
    //Create an array out of this number.
    let number = String(n).split("").reverse();
    let zeroEnd = false;
    console.log(number);
    //Go through each number. If we encounter a "second" group of zeros, we know we can swap.
    for(let i = 0; i < number.length; i++) {
        if(number[i] !== "0") {
            zeroEnd = true;
        } else if(number[i] === "0" && zeroEnd) {
            return true;
        }
    }
    return false;
}