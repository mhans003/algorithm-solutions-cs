/*
Mark got a rectangular array matrix for his birthday, and now he's thinking about all the fun things he can do with it. He likes shifting a lot, so he decides to shift all of its i-contours in a clockwise direction if i is even, and counterclockwise if i is odd.

Here is how Mark defines i-contours:

the 0-contour of a rectangular array as the union of left and right columns as well as top and bottom rows;
consider the initial matrix without the 0-contour: its 0-contour is the 1-contour of the initial matrix;
define 2-contour, 3-contour, etc. in the same manner by removing 0-contours from the obtained arrays.
Implement a function that does exactly what Mark wants to do to his matrix.
*/

function contoursShifting(matrix) {
    //Helper function to shift array elements
    const shiftElements = (elements, counterClockwise, rowWidth, colHeight) => {
        //Put these elements into the correct order for rotation, ONLY if the elements are not coming in as one single row or one single column (in which case we use the same elements array values)
        let elementsToShift = rowWidth > 1 && colHeight > 1 ? [
            ...elements.slice(0, rowWidth),
            ...elements.slice(rowWidth, elements.length - rowWidth).filter((element, index) => index % 2),
            ...elements.slice(rowWidth * -1).reverse(),
            ...elements.slice(rowWidth, elements.length - rowWidth).filter((element, index) => !(index % 2)).reverse()
        ] : elements;
                
        //Shift to the right if clockwise, otherwise to the left.
        let removedElement = counterClockwise ? elementsToShift.shift() : elementsToShift.pop();
        if(counterClockwise) {
            elementsToShift.push(removedElement);
        } else {
            elementsToShift.unshift(removedElement);
        }
                
        //If the elements were rearranged, put them back into order in the same format as the input.
        if(rowWidth > 1 && colHeight > 1) {
            //Find the values that will need to be reshuffled
            let sectionSize = (elementsToShift.length - (rowWidth * 2)) / 2;
            let section1 = elementsToShift.slice(rowWidth, rowWidth + sectionSize);
            let section2 = elementsToShift.slice(sectionSize * -1);
            //Reorder the scrambled sections.
            let reorderedSections = [];
            for(let i = 0; i < section1.length; i++) {
                reorderedSections.push(section2[section2.length - 1 - i]);
                reorderedSections.push(section1[i]);
            }
            //Return the reordered array.
            return [
                ...elementsToShift.slice(0, rowWidth),
                ...reorderedSections,
                ...elementsToShift.slice(rowWidth + sectionSize, (rowWidth + sectionSize) + rowWidth).reverse()
            ];
        } 
        //Otherwise, return original array.
        return elementsToShift;
    };
    
    //Initial pointers to array indexes and dimension bounds
    let start_i = 0; 
    let start_j = 0;
    let height = matrix.length;
    let width = matrix[0].length;
    
    //Loop through every 'rectangle' in order to extract values, pass to be rotated, and then replaced.
    while(height >= 1 && width >= 1) {
        //Extract the elements bordering this rectangle.
        let elements = [];
        //Loop over every row in the 'rectangle'
        for(let i_offset = start_i; i_offset - start_i < height; i_offset++) {
            //Loop over every col in the 'rectangle'
            for(let j_offset = start_j; j_offset - start_j < width; j_offset++) {
                //If this is a top or bottom row, extract all elements.
                if(i_offset === start_i || 
                i_offset === start_i + height - 1 ||
                j_offset === start_j ||
                j_offset === start_j + width - 1) {
                    elements.push(matrix[i_offset][j_offset]);
                }
            }
        }
        
        //Pass these elements, along with the direction value (0 or 1) and row width/height, to be shifted.
        let shiftedElements = shiftElements(elements, start_i % 2, width, height);
                
        //Traverse this rectangle again, replacing the elements.
        //Loop over every row in the 'rectangle'
        for(let i_offset = start_i; i_offset - start_i < height; i_offset++) {
            //Loop over every col in the 'rectangle'
            for(let j_offset = start_j; j_offset - start_j < width; j_offset++) {
                //If this is a top or bottom row, extract all elements.
                if(i_offset === start_i || 
                i_offset === start_i + height - 1 ||
                j_offset === start_j ||
                j_offset === start_j + width - 1) {
                    matrix[i_offset][j_offset] = shiftedElements.shift();
                }
            }
        }
        
        //Update values and move on to next rectangle.
        start_i++;
        start_j++;
        height -= 2;
        width -= 2;
    }
    
    //Return the final shifted matrix.
    return matrix;
}
