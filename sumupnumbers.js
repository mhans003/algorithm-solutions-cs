/*
CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.
*/

function sumUpNumbers(inputString) {
    //Remove unwanted characters from the string so only spaces and numbers remain.
    let stringToTrim = inputString;
    for(let i = 0; i < inputString.length; i++) {
        if(!(inputString.charCodeAt(i) > 47 && inputString.charCodeAt(i) < 58)) {
            stringToTrim = stringToTrim.replace(stringToTrim[i], " ")
        }
    }
    
    //Remove the spaces (non-numbers), parse strings into numbers, and return array of only prices.
    let parsedNumbers = stringToTrim.split(" ").filter(number => {
        if(!isNaN(number)) return parseInt(number) + 0;
    }).map(number => parseInt(number));
    
    //Go through each price (if the array contains any prices) and add to the total.
    let total = 0;
    if(parsedNumbers.length) {
        total = parsedNumbers.reduce((accumulator, current) => {
            return accumulator += current;
        });
    }
    
    return total;
}