/*
Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.

Given two two-dimensional arrays, check if they are isomorphic.
*/

function areIsomorphic(array1, array2) {
    //First, check that the number of rows are the same, then iterate over each array in the first and match the length to the corresponding length of the one in array2 (using every method)
    return array1.length === array2.length && array1.every((array, index) => array.length === array2[index].length);
}
