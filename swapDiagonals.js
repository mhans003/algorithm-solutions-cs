/*
The longest diagonals of a square matrix are defined as follows:

the first longest diagonal goes from the top left corner to the bottom right one;
the second longest diagonal goes from the top right corner to the bottom left one.
Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.
*/

function swapDiagonals(matrix) {
    matrix.forEach((row, index) => {
        //Traverse each row, swapping corresponding elements until diagonals are reversed.
        [row[0 + index], row[matrix.length - 1 - index]] = [row[matrix.length - 1 - index], row[0 + index]];
    });
    return matrix;
}
