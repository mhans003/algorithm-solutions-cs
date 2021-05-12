/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.
*/

function minesweeper(matrix) {
    //start with an output array of the same size and same length as matrix with all 0's
    let output = [];
    for(let i = 0; i < matrix.length; i++) {
        let thisRow = [];
        for(let j = 0; j < matrix[i].length; j++) {
            thisRow.push(0);
        }
        output.push(thisRow);
    }
    //Find all 'true' values in each row of the matrix
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            //If this value is true, initiate loop to go around it and add 1 to surrouding elements in the ouput array.
            if(matrix[row][col]) {
                console.log(`LOOPING THROUGH ELEMENTS AROUND ${row},${col}`);
                //Loop through surrounding elements
                for(let row_prime = row - 1; row_prime < row + 2; row_prime++) {
                    for(let col_prime = col - 1; col_prime < col + 2; col_prime++) {
                        //Make sure this element is not out of bounds or equal to the element where we currently are
                        if(row_prime > -1 && 
                        col_prime > -1 &&
                        row_prime < matrix.length &&
                        col_prime < matrix[row].length &&
                        !(col_prime === col && row_prime === row)
                        ) {
                            console.log(`Adding at location ${row_prime},${col_prime}`);
                            //Add to this element in the output array.
                            output[row_prime][col_prime]++;
                        }
                    }
                }
            }
        }
    }
    return output;
}
