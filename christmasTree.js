/*
It's Christmas time! To share his Christmas spirit with all his friends, the young Christmas Elf decided to send each of them a Christmas e-mail with a nice Christmas tree. Unfortunately, Internet traffic is very expensive in the North Pole, so instead of sending an actual image he got creative and drew the tree using nothing but asterisks ('*' symbols). He has given you the specs (see below) and your task is to write a program that will generate trees following the spec and some initial parameters.

Here is a formal definition of how the tree should be built, but before you read it the Elf HIGHLY recommends first looking at the examples that follow:

Each tree has a crown as follows:

 *
 *
***
Define a line as a horizontal group of asterisks and a level as a collection of levelHeight lines stacked one on top of the other.

Below the crown there are levelNum levels.

The tree is perfectly symmetrical so all the middle asterisks of the lines lie on the center of the tree.

Each line of the same level (excluding the first one) has two more asterisks than the previous one (one added to each end);

The number of asterisks in the first line of each level is chosen as follows:

the first line of the first level has 5 asterisks;
the first line of each consecutive level contains two more asterisks than the first line of the previous level.
And finally there is the tree foot which has a height of levelNum and a width of:

levelHeight asterisks if levelHeight is odd;
levelHeight + 1 asterisks if levelHeight is even.
Given levelNum and levelHeight, return the Christmas tree of the young elf.
*/

function christmasTree(levelNum, levelHeight) {
    let tree = [];
    let maxLength = 5 + (2 * (levelHeight - 1)) + (2 * (levelNum - 1));
    //Create crown
    let crownTop = "";
    for(let i = 0; i <= (maxLength - 1) / 2; i++) {
        crownTop += i === (maxLength - 1) / 2 ? "*" : " ";
    }
    tree.push(crownTop);
    tree.push(crownTop);
    let crownBase = "";
    for(let i = 0; i <= ((maxLength - 1) / 2) + 1; i++) {
        crownBase += i < (((maxLength - 1) / 2) + 1) - 2 ? " " : "*";
    }   
    tree.push(crownBase);
    
    //Create Main Levels
    for(let thisLevel = 0; thisLevel < levelNum; thisLevel++) {
        //Establish the size (number of *) of the first(top) line
        let defaultTopSize = 5 + (thisLevel * 2);
        //Establish the length (number of total indexes) of the first(top) line
        let defaultTopLength = ((maxLength - 1) / 2) + 3 + (thisLevel * 1);
        
        //For each level, construct each line
        for(let thisLine = 0; thisLine < levelHeight; thisLine++) {
            //Establish the size(number of *) of the current line
            let line = "";
            let thisSize = defaultTopSize + (2 * thisLine);
            let thisLength = defaultTopLength + (1 * thisLine);
                        
            //Fill in this line
            for(let i = 0; i < thisLength; i++) {
                let thisChar = i < thisLength - thisSize ? " " : "*";
                line += thisChar;
            }
                
            //Push this line into the tree.        
            tree.push(line);
        }
    }
    
    //Construct base
    let baseWidth = levelHeight % 2 ? levelHeight : levelHeight + 1;
    let baseLength = maxLength - ((maxLength - baseWidth) / 2);
    let base = "";
        
    //Fill in the characters for the base
    for(let i = 0; i < baseLength; i++) {
        base += i < baseLength - baseWidth ? " " : "*";
    }
    
    //Using the line for the base, fill into the tree the correct number of times.
    for(let baseLevel = 0; baseLevel < levelNum; baseLevel++) {
        tree.push(base);
    }
    
    return tree;
}
