/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.
*/

function sudoku(grid) {
    let valid = true;
    //Test the rows.
    for(let i = 0; i < grid.length; i++) {
        let existingNums = {};
        for(let j = 0; j < grid[i].length; j++) {
            //If we find a repeating number in this row, return false.
            if(existingNums[grid[i][j]]) {
                valid = false;
            }
            existingNums[grid[i][j]] = true;
        }
    }
    //Test the columns
    for(let j = 0; j < grid.length; j++) {
        let existingNums = {};
        for(let i = 0; i < grid.length; i++) {
            //If we find a repeating number in this column, return false;
            if(existingNums[grid[i][j]]) {
                valid = false;
            }
            existingNums[grid[i][j]] = true;
        }
    }
    //Test the squares
    for(let i = 0; i < grid.length; i += 3) {
        for(let j = 0; j < grid[i].length; j += 3) {
            let existingNums = {};
            //For each square, start iteration through the individual numbers
            for(let i_prime = i; i_prime < i + 3; i_prime++) {
                for(let j_prime = j; j_prime < j + 3; j_prime++) {
                    //If we find a repeating number in this column, return false;
                    if(existingNums[grid[i_prime][j_prime]]) {
                        valid = false;
                    }
                    existingNums[grid[i_prime][j_prime]] = true;
                }
            }
        }
    }
    
    return valid;
}
