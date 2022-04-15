/*
Given an integer n, add a dot (".") as the thousands separator and return it in string format.
*/

var thousandSeparator = function(n) {
    //Split number into array (in reverse to build number starting at smallest place).
    let digitArray = n.toString().split("").reverse();
    
    //Store output as array.
    let output = [];

    //Go through each digit and only add . before every third digit.
    digitArray.forEach((digit, index) => {
        if(index % 3 === 0 && index !== 0) output.unshift('.');
        
        output.unshift(digit);
    });
    
    //Convert output back to string.
    return output.join("")
};