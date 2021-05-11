/*
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.
*/

function areSimilar(a, b) {
    //Placeholder elements for swapping if needed
    let firstElement = null;
    let secondElement = null;
    
    //Identify first two unlike elements(will be swapped)
    a.forEach((element, index) => {
        if(element !== b[index]) {
            firstElement === null ? firstElement = index : secondElement === null ? secondElement = index : null;
        }
    });
    
    //If there are two unlike elements, swap them.
    if(firstElement !== null && secondElement !== null) {
        [a[firstElement], a[secondElement]] = [a[secondElement], a[firstElement]];
    }
    
    //Assume the arrays are equal.
    let isEqual = true;
    
    //See if any elements are not the same.
    a.forEach((element, index) => {
        if(element !== b[index]) {
            isEqual = false;
        }
    });
    
    //Return true or false depending on if arrays are the same now.
    if(isEqual) return true;
    
    return false;
}