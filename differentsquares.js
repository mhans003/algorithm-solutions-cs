//Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

function differentSquares(matrix) {
    //Keep track of unique squares.
    let uniqueSquares = {};
    //Loop through each square start.
    for(let row = 0; row < matrix.length - 1; row++) {
        for(let col = 0; col < matrix[0].length - 1; col++) {
            //Loop through this square, and build this square's string representation.
            let thisSquare = "";
            for(let row_prime = row; row_prime < row + 2; row_prime++) {
                for(let col_prime = col; col_prime < col + 2; col_prime++) {
                    thisSquare += matrix[row_prime][col_prime];
                }
            }
            //If this is not already a unique square, add it to unique squares.
            if(!uniqueSquares[thisSquare]) uniqueSquares[thisSquare] = 1;
        }
    }
    //Total up the number of unique squares stored and return.
    let total = 0;
    for(let square in uniqueSquares) {
        total++;
    }
    return total;
}