/*
Consider a (2k+1) × (2k+1) square subarray of an integer integers matrix. Let's call the union of the square's two longest diagonals, middle column and middle row a star. Given the coordinates of the star's center in the matrix and its width, rotate it 45 · t degrees clockwise preserving position of all matrix elements that do not belong to the star.
*/

function starRotation(matrix, width, center, t) {
    //Get rid of uncessary rotations, since every 8 rotations the elements are back in the same place.
    let totalRotations = t % 8;
    
    //Helper function to rotate square elements
    const rotateElements = squareElements => {
        //Create new array for rotation (excludes middle value at index 4) in the order of the square going clockwise.
        const arrayToRotate = [
            ...squareElements.slice(0,3), 
            squareElements[5],
            ...squareElements.slice(6).reverse(),
            squareElements[3]
        ];
        
        //Reverse the elements a specific number of times
        for(let i = 0; i < totalRotations; i++) {
            let lastElement = arrayToRotate.pop();
            arrayToRotate.unshift(lastElement);
        }
                
        //Return the array rearranged back into row/col order.
        return [
            ...arrayToRotate.slice(0, 3),
            arrayToRotate[7],
            squareElements[4],
            arrayToRotate[3],
            ...arrayToRotate.slice(4, 7).reverse()
        ];
    };
    
    //Find the initial 'starting point' for the square (upper-left corner indexes)
    let start_i = center[0] - Math.floor(width / 2);
    let start_j = center[1] - Math.floor(width / 2);
    
    //Start with the initial width of the largest (outer) square.
    let currentSquareWidth = width;
    
    //Loop through each 'outer square' of the star
    while(currentSquareWidth > 2) {
        //Extract the values of this square and rotate (return array of new order)
        let elements = [];
        
        //Loop over each 'row' of the square.
        for(let i_offset = start_i; i_offset - start_i < currentSquareWidth; i_offset += Math.floor(currentSquareWidth / 2)) {
            //Loop over each 'col' of the square.
            for(let j_offset = start_j; j_offset - start_j < currentSquareWidth; j_offset += Math.floor(currentSquareWidth / 2)) {
                //Place this element into the array to be rotated.
                elements.push(matrix[i_offset][j_offset]);
            }
        }
        
        //Create array to pull rotated values from.
        let rotatedSquare = rotateElements(elements);
        
        //Fill in these elements with the new values
        //Loop over each 'row' of the square.
        for(let i_offset = start_i; i_offset - start_i < currentSquareWidth; i_offset += Math.floor(currentSquareWidth / 2)) {
            //Loop over each 'col' of the square.
            for(let j_offset = start_j; j_offset - start_j < currentSquareWidth; j_offset += Math.floor(currentSquareWidth / 2)) {     
                //Use the newly filled rotated square array to incrementally place elements into their spots.
                matrix[i_offset][j_offset] = rotatedSquare.shift();
            }
        }
            
        //After finishing with this square, update values of start_i and start_j and width.
        start_i++;
        start_j++;
        currentSquareWidth -= 2;
    }
    
    //Return the array, with updated elements in place.
    return matrix;
}
