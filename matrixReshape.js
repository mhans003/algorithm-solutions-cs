/*
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
*/

var matrixReshape = function(mat, r, c) {
    //Return the original array if not possible.
    if(mat[0].length * mat.length !== r * c) return mat; 
    
    //Flatten the incoming array to use numbers.
    let numbers = mat.flat();
    
    //Create result array for new array.
    let result = [];
    
    //Insert the numbers into new array with dimensions r, c.
    for(let i = 0; i < r; i++) {
        let thisRow = [];
        for(let j = 0; j < c; j++) {
            //Using the flattened array, take the first element and place it into the next position of the result.
            thisRow.push(numbers.shift());
        }
        //Insert this row into the result array.
        result.push(thisRow);
    }
    
    return result;
};