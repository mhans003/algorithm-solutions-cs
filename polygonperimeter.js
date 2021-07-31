/*
You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get from any black cell to any other one through connected adjacent (sharing a common side) black cells.

Find the perimeter of the black figure assuming that a single cell has unit length.

It's guaranteed that there is at least one black cell on the table.
*/

function polygonPerimeter(matrix) {
    let perimeter = 0;
    //Loop through every square.
    matrix.forEach((row, rowIndex) => {
        row.forEach((square, squareIndex) => {
            //If this value is true:
            if(square) {
                //Look to all sides. If that location is not a valid square, add to perimeter.
                if(!row[squareIndex - 1]) perimeter++;
                if(!row[squareIndex + 1]) perimeter++;
                if(!matrix[rowIndex + 1] || !matrix[rowIndex + 1][squareIndex]) perimeter++;
                if(!matrix[rowIndex - 1] || !matrix[rowIndex - 1][squareIndex]) perimeter++;
            }
        });
    });
    return perimeter;
}
