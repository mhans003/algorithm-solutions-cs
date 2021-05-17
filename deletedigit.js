//Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

function deleteDigit(n) {
    //Create string representation.
    let numberString = String(n);
    //Create the initial max number by removing the first digit character.
    let maxNumber = Number(numberString.substring(1));
    console.log(maxNumber);
    
    //Go through each character of the string representation of the number.
    for(let i = 1; i < numberString.length; i++) {
        //Form the new number by removing this character.
        let thisNumber = i === numberString.length - 1 ? 
        Number(numberString.substring(0, i)) :
        Number(numberString.substring(0, i) + numberString.substring(i + 1));
         
        //See if this current number (with the removed digit) is larger than the current max.
        maxNumber = thisNumber > maxNumber ? thisNumber : maxNumber;
    }
    
    return maxNumber;
}