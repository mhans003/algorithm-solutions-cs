var bitwiseComplement = function(n) {
    //ParseInt will turn the result of everything BACK into an integer.
    //Turn n to a binary string, split into an array, and flip the bits.
    return parseInt(n
        .toString(2)
        .split("")
        .map(bit => {
            return bit === "1" ? "0" : "1";
        })
        .join(""), 2);
};