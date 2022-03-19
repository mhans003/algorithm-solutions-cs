/*
Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).
*/

var numSpecial = function(mat) {
    let specialPositions = 0;
    
    //Loop through every cell in the 2D array.
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            //Check if this position has a 1.
            if(mat[i][j] === 1) {
                //If so, check the vertical and horizontal positions.
                //Use index parameter to 'skip over' the current i and current j in checking every position.
                if(mat.every((row, index) => row[j] === 0 || index === i)
                   && mat[i].every((cell, index) => cell === 0 || index === j)) specialPositions++;
            }
        }
    }
    
    return specialPositions;
};