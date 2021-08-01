/*
You are given a vertical box divided into equal columns. Someone dropped several stones from its top through the columns. Stones are falling straight down at a constant speed (equal for all stones) while possible (i.e. while they haven't reached the ground or they are not blocked by another motionless stone). Given the state of the box at some moment in time, find out which columns become motionless first.
*/

function gravitation(rows) {
    let motionless = [];
    let smallest = Infinity;
    //Count number of non-stone spaces in each column.
    for(let col = 0; col < rows[0].length; col++) {
        let spaces = 0;
        let foundStones = false;
        for(let row = 0; row < rows.length; row++) {
            //Once a # is found, spaces can be counted.
            if(rows[row][col] === "#") foundStones = true;
            if(foundStones && rows[row][col] === ".") spaces++;
        }
        //Once the number of spaces are counted, see if this is the smallest so far.
        //If this is the smallest, mark as the new smallest and recrete the motionless array to include this column
        if(spaces < smallest) {
            smallest = spaces;
            motionless = [col];
        } else if(spaces === smallest) {
            //If this is equal to the current smallest, push this column.
            motionless.push(col);
        }
    }
    //Return the array with all the indexes.
    return motionless;
}