/*
You are implementing a command-line version of the Paint app. Since the command line doesn't support colors, you are using different characters to represent pixels. Your current goal is to support rectangle x1 y1 x2 y2 operation, which draws a rectangle that has an upper left corner at (x1, y1) and a lower right corner at (x2, y2). Here the x-axis points from left to right, and the y-axis points from top to bottom.

Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. For the details about how rectangles are painted, see the example.
*/

function drawRectangle(canvas, rectangle) {
    for(let row = 0; row < canvas.length; row++) {
        //Skip over loops out of bounds of the rectangle.
        if(row < rectangle[1] || row > rectangle[3]) continue;
        //Handle top and bottom rows of the rectangle.
        if(row === rectangle[1] || row === rectangle[3]) {
            //Loop over all positions of the top and bottom row of the rectangle.
            for(let position = rectangle[0]; position <= rectangle[2]; position++) {
                //Handle corners.
                if(position === rectangle[0] || position === rectangle[2]) {
                    canvas[row][position] = "*";
                } else {
                    canvas[row][position] = "-";
                }
            }
        } else {
            //Otherwise, this is a rectangle side.
            canvas[row][rectangle[0]] = "|";
            canvas[row][rectangle[2]] = "|";
        }
    }
    return canvas;
}