/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

var pascalsTriangle = function(numRows) {
    let result = [[1]];
    for(let i = 1; i < numRows; i++) {
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
    return result;
};