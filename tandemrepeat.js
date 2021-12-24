//Determine whether the given string can be obtained by one concatenation of some string to itself.

function isTandemRepeat(inputString) {
    let sub = "";
    //Up until half of the string is reached, see if the current substring concatenated to itself equals the input.
    for(let i = 0; i < inputString.length / 2; i++) {
        sub += inputString[i];
        if(sub + sub === inputString) return true;
    }
    return false;
}