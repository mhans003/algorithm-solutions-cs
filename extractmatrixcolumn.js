/*
Given a rectangular matrix and an integer column, return an array containing the elements of the columnth column of the given matrix (the leftmost column is the 0th one).
*/

function extractMatrixColumn(matrix, column) {
    //Take out each 'row' (array element) and return the element at position [column]
    return matrix.map(row => row[column]);
}