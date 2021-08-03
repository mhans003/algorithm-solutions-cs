/*
Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).
*/

function rowsRearranging(matrix) {
    //Sort array rows by total sum of each row.
    matrix.sort((a, b) => {
        return b.reduce((i, j) => i += j, 0) - a.reduce((i, j) => i += j, 0);
    });
        
    //Loop through each row and ensure that they are strictly increasing.
    for(let i = 0; i < matrix.length - 1; i++) {
        //For each row, loop through each number and compare that index to the one below.
        for(let j = 0; j < matrix[i].length; j++) {
            if(!(matrix[i][j] > matrix[i + 1][j])) return false;
        }
    }
    
    return true;
}