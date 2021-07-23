/*
The longest diagonals of a square matrix are defined as follows:

the first longest diagonal goes from the top left corner to the bottom right one;
the second longest diagonal goes from the top right corner to the bottom left one.
Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.
*/

function reverseOnDiagonals(matrix) {
    matrix.forEach((row, index) => {
        //Swap first diagonals
        if(index < Math.floor(matrix.length / 2)) {
            [row[index], matrix[matrix.length - 1 - index][matrix.length - 1 - index]] = [matrix[matrix.length - 1 - index][matrix.length - 1 - index], row[index]];
        } else {
            //Swap second diagonals
            [row[matrix.length - 1 - index], matrix[matrix.length - 1 - index][0 + index]] = [matrix[matrix.length - 1 - index][0 + index], row[matrix.length - 1 - index]];
        }
    });
    return matrix;
}