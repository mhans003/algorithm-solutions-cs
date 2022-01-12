/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

var pascalsTriangle2 = function(rowIndex) {
    let result = [[1]];
    for(let i = 1; i <= rowIndex; i++) {
        //Start this row (only will run if generating more than first row)
        let thisRow = [];
        for(let j = 0; j <= result[result.length - 1].length - 2; j++) {
            //Add next two elements of last array in the result array.
            thisRow.push(result[result.length - 1][j] + result[result.length - 1][j + 1]);
        }
        //Push 1 to the beginning and end of the row.
        thisRow.unshift(1);
        thisRow.push(1);
        //Push this row to the result.
        result.push(thisRow);
    }
    return result[rowIndex];
};