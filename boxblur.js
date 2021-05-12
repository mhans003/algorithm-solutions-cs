/* 
Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.
*/

function boxBlur(image) {
    //Create output array
    let output = [];
    //Loop through all sets of 3 rows
    for(let i = 0; i <= image.length - 3; i++) {
        
        //Create this 'row' of the output array.
        let thisRow = [];
        
        //Loop through all sets of 3 cols
        for(let j = 0; j <= image[i].length - 3; j++) {
            //Create the total of all 9 elements
            let total = 0;
            //Isolate the elements in this square and add them together  
            for(let i_prime = i; i_prime <= i + 2; i_prime++) {
                //Count the squares.
                for(let j_prime = j; j_prime <= j + 2; j_prime++) {
                    total += image[i_prime][j_prime];
                    console.log(`total with ${image[i_prime][j_prime]} is now ${total}`);
                }
            }
            //Push this row to the array.
            thisRow.push(Math.floor(total / 9));
        }
        
        //Add this completed row to the output square.
        output.push(thisRow);
    }
    //Return the completed output
    return output;
}
