/*
Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
*/

var isToeplitzMatrix = function(matrix) {
    //Save the elements of the last row that should be present in the next.
    let lastRowElements = [];
    
    //Loop through each row and determine if valid.
    for(let row = 0; row < matrix.length; row++) {
        //If this is not the first row, check against the last row elements.
        if(row > 0) {
            //Check the last row elements to see if they are in the correct place in the current row.
            for(let i = 1; i < matrix[row].length; i++) {
                //If we do not see the expected elements shifted over in this row, return false.
                if(matrix[row][i] !== lastRowElements[i - 1]) return false;
            }
        }
        //Save the current row to be used to check against the next row.
        lastRowElements = matrix[row].slice(0, -1);
    }
    
    return true;
};