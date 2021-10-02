/*
A nonogram is also known as Paint by Numbers and Japanese Crossword. The aim in this puzzle is to color the grid into black and white squares. At the top of each column, and at the side of each row, there are sets of one or more numbers which describe the runs of black squares in that row/column in exact order. For example, if you see 10 1 along some column/row, this indicates that there will be a run of exactly ten black squares, followed by one or more white squares, followed by a single black square. The cells along the edges of the grid can also be white.

You are given a square nonogram of size size. Its grid is given as a square matrix nonogramField of size (size + 1) / 2 + size, where the first (size + 1) / 2 cells of each row and and each column define the numbers for the corresponding row/column, and the rest size × size cells define the the grid itself.

Determine if the given nonogram has been solved correctly.
*/

function correctNonogram(size, nonogramField) {
    //Loop through each column of the nonogram, seeing if the rules defined in the first elements are followed in the rest of the grid itself.
    for(let col = nonogramField[0].length - size; col < nonogramField[0].length; col++) {
        //Keep track of the 'rules' in the form of the number of # to be expected in each group.
        let rules = [];
        //If inside of a # group, keep track of the number found.
        let inGroup = false;
        let groupCount = 0;
        //Loop over each row of this column index.
        for(let row = 0; row < nonogramField.length; row++) {
            //If this is a number, add to the rules.
            if(!isNaN(nonogramField[row][col])) rules.push(nonogramField[row][col]);
            //If this is a #, track to see if there are the correct number of # together.
            if(nonogramField[row][col] === "#") {
                inGroup = true;
                groupCount++;
            } else if(nonogramField[row][col] === ".") {
                //If there is a group counted, see if it follows the current rule.
                if(groupCount > 0) {
                    if(rules[0] != groupCount) {
                        //Exit the function if the rule isn't followed by this group.
                        return false;
                    }
                    //Get rid of this rule, since it was used and now passed.
                    rules.shift();
                    //Reset group count.
                    groupCount = 0;
                }
            }
            //If this is the end and not all groups are accounted for, verify now.
            if(row === nonogramField.length - 1 && groupCount) {
                //If there is a group count but no rules left, return early.
                if(!rules.length) return false;
                //Otherwise, verify that the rule is followed.
                if(rules[0] != groupCount) return false;
                //Clear the (hopefully last) rule.
                rules.shift();
                //If there are still rules left, this isn't a valid column.
                if(rules.length) return false;
            } 
        }
    }
    
    //Loop through each row of the nonogram, seeing if the rules defined in the first elements are followed in the rest of the grid itself.
    for(let row = nonogramField.length - size; row < nonogramField.length; row++) {
        //Keep track of the 'rules' in the form of the number of # to be expected in each group.
        let rules = [];
        //If inside of a # group, keep track of the number found.
        let inGroup = false;
        let groupCount = 0;
        console.log("Looping over row " + row); 
        //Loop over each row of this column index.
        for(let col = 0; col < nonogramField[row].length; col++) {
            //If this is a number, add to the rules.
            if(!isNaN(nonogramField[row][col])) rules.push(nonogramField[row][col]);
            //If this is a #, track to see if there are the correct number of # together.
            if(nonogramField[row][col] === "#") {
                inGroup = true;
                groupCount++;
            } else if(nonogramField[row][col] === ".") {
                //If there is a group counted, see if it follows the current rule.
                if(groupCount > 0) {
                    if(rules[0] != groupCount) {
                        //Exit the function if the rule isn't followed by this group.
                        return false;
                    }
                    //Get rid of this rule, since it was used and now passed.
                    rules.shift();
                    //Reset group count.
                    groupCount = 0;
                }
            }
            //If this is the end and not all groups are accounted for, verify now.
            if(col === nonogramField[0].length - 1 && groupCount) {
                //If there is a group count but no rules left, return early.
                if(!rules.length) return false;
                //Otherwise, verify that the rule is followed.
                if(rules[0] != groupCount) return false;
                //Clear the (hopefully last) rule.
                rules.shift();
                //If there are still rules left, this isn't a valid column.
                if(rules.length) return false;
            } 
        }
    }
    
    return true;
}
