/*
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.
*/

function reverseInParentheses(inputString) {
    //split the string into an array
    let stringArray = inputString.split("");
    //This will hold the final array to be turned back to a string
    let resultArray = [];
    //Loop through each of the array items (each character)
    for(let i = 0; i < stringArray.length; i++) {
        //If the current character is not a closed parenthesis
        if(stringArray[i] !== ")") {
            //Push it into the result array
            resultArray.push(stringArray[i]);
        } else {
            //Otherwise, create a temp array that will be the reverse of what is in result array.
            let tempArray = reverseArrayString(resultArray);
            //Take out the characters starting at the beginning and ending at the last index of (, and save that back to the result array.
            resultArray = resultArray.splice(0, resultArray.lastIndexOf("("));          //
            resultArray = resultArray.concat(tempArray);
        }
    }
    return resultArray.join("");
}

function reverseArrayString(array) {
    let array2 = [];
    for(let i = array.length; i >= 0; i--) {
        if(array[i] !== "(") {
            array2.push(array[i]);
        } else {
            break;
        }
    }
    return array2;
}
