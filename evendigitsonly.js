//Check if all digits of the given integer are even.

function evenDigitsOnly(n) {
    let numberString = String(n);
    //Loop through every 'character' in the stringified number.
    for(let i = 0; i < numberString.length; i++) {
        //If any digit is odd, return early.
        if(Number(numberString[i]) % 2 !== 0) {
            return false;
        }
    }
    return true;
}