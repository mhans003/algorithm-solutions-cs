/*
You are given n rectangular boxes, the ith box has the length lengthi, the width widthi and the height heighti. Your task is to check if it is possible to pack all boxes into one so that inside each box there is no more than one another box (which, in turn, can contain at most one another box, and so on). More formally, your task is to check whether there is such sequence of n different numbers pi (1 ≤ pi ≤ n) that for each 1 ≤ i < n the box number pi can be put into the box number pi+1.
A box can be put into another box if all sides of the first one are less than the respective ones of the second one. You can rotate each box as you wish, i.e. you can swap its length, width and height if necessary.
*/

function boxesPacking(length, width, height) {
    //Get all boxes with their dimensions.
    let boxes = [];
    for(let i = 0; i < arguments[0].length; i++) {
        //Get all boxes with their dimensions.
        let box = {
            dimensions: [length[i], width[i], height[i]].sort((a, b) => a - b),
            sum: length[i] + width[i] + height[i]
        }
        boxes.push(box);
    }
    
    //Sort by sums so that the overall box sizes are ordered.
    boxes.sort((a, b) => (a.sum > b.sum) ? 1 : -1);
    
    //Verify that for every box, the box that came before has dimensions that are all smaller.
    for(let i = 1; i < boxes.length; i++) {
        //Go through each sorted dimension.
        for(let j = 0; j < arguments.length; j++) {
            //If we find equal or greater values in the previous box's dimensions, return false.
            if(!(boxes[i]["dimensions"][j] > boxes[i - 1]["dimensions"][j])) return false;
        }
    }
    
    return true;
}
