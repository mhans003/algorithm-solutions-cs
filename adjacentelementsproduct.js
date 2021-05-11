/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
*/

function adjacentElementsProduct(inputArray) {
    let product; 
    for(let thisFactor = 0; thisFactor < inputArray.length - 1; thisFactor++) {
        if(!product || inputArray[thisFactor] * inputArray[thisFactor + 1] > product) {
            product = inputArray[thisFactor] * inputArray[thisFactor + 1]; 
        }
    }
    return product; 
}
