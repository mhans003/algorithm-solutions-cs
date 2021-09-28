/*
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.
*/

function areSimilar2(a, b) {
    console.log("test rename areSimilar2")
    //Helper function to see if arrays are equal.
    const arrayCheck = (arr1, arr2) => {
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] !== arr2[i]) return false;
        }
        return true;
    };
    
    //Go through each element in array a, and compare to the current element of array b.
    for(let i = 0; i < a.length; i++) {
        //Once we find an unequal value, traverse through both arrays after this point simultaneously to find a spot where the values are equal and in opposite positions, then swap.
        if(a[i] !== b[i]) {
            for(let j = i + 1; j < b.length; j++) {
                if(a[i] === b[j] && b[i] === a[j]) {
                    [b[i], b[j]] = [b[j], b[i]];
                    //Run an array check now to ensure only one swap is done.
                    return arrayCheck(a, b);
                }
            }
        }
    }
    
    return arrayCheck(a, b);
}
