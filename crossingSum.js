/*
Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix (i.e. all cells that belong either to the ath row or to the bth column, or to both). Return sum of all elements of that union.
*/

function crossingSum(matrix, a, b) {
    //First, add the entire row at index a, then loop through all the columns (index b) except for the one that matches a (to avoid duplicate) and add the sums together.
    return matrix[a].reduce((sum, current) => sum += current, 0) + 
           matrix.reduce((sum, current, arrayIndex) => {
               if(arrayIndex !== a) return sum += current[b];
               return sum;
           }, 0);
}
