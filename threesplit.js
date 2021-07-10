/*
You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?

It is guaranteed that the sum of all elements in the array is divisible by 3.
*/

function threeSplit(a) {
    //Get the total sum that each piece of the array should be.
    let sum = a.reduce((a,b) => a += b, 0) / 3;
    let combinations = 0;
    let firstPiece = 0;
    //Loop through each number in the array, starting at the first.
    for (let i = 0; i < a.length; i++) {
        //Incrementally add to the first piece.
        firstPiece += a[i];
        //If this current size of the first piece equals the correct sum, loop through the second piece for this iteration.
        if (firstPiece === sum) {
            let secondPiece = 0;
            //Loop through each number in the second piece.
            for (let j = i + 1; j < a.length; j++) {
                //Incrementally add to the second piece.
                secondPiece += a[j];
                //If this current size of the second piece equals the correct sum, we know we have reached a correct combination since the remainder must equal the other third. 
                if (secondPiece === sum) {
                    //As long as this is not the last piece in the array, this is a working combination (there must be 3 pieces, not 2)
                    if (j < a.length - 1) {
                        combinations++;
                    }
                }
            }
        }
    }
    return combinations;
}
