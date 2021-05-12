/*
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
*/

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    //Loop through every element. Using map, return the new element if the element matches the one to be replaced. Otherwise, return the same.
    let output = inputArray.map(element => {
        if(element === elemToReplace) {
            return substitutionElem;
        } else {
            return element;
        }
    });
    return output; 
}
