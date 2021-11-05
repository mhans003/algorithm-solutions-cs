//Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

function spiralNumbers(n) {
    //Create initial matrix.
    let matrix = [];
    for(let i = 0; i < n; i++) {
        matrix.push([]);
        for(let j = 0; j < n; j++) {
            matrix[i].push(0);
        }
    }
    
    //Fill in the spiral square-by-square.
    //Keep track of the bounds of the current square and current number.
    let min = 0;
    let max = n - 1;
    let count = 1;
    
    //For each 'square'
    while(min <= max) {
        //Fill top row
        for(let i = min; i <= max; i++) {
            if(matrix[min]) {
                matrix[min][i] = count;
                count++;
            } 
        }
        //Fill right col 
        for(let i = min + 1; i <= max; i++) {
            if(matrix[i]) {
                matrix[i][max] = count;
                count++;
            }
        }
        //Fill bottom row backwards
        for(let i = max - 1; i >= min; i--) {
            if(matrix[max]) {
                matrix[max][i] = count;
                count++;
            }
        }
        //Fill left col backwards
        for(let i = max - 1; i > min; i--) {
            if(matrix[i]) {
                matrix[i][min] = count;
                count++;
            }
        }
    
        //Make the dimensions of the square smaller.
        min++;
        max--;
    }
    
    return matrix;
}
