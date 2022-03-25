/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

var maxArea = function(height) {
    //Establish starting values 
    //x refers to dimensions across 
    let x1 = 0;
    let x2 = height.length - 1;
    //y refers to height (always use smallest end so the water wouldn't 'pour out')
    let y = Math.min(height[0], height[height.length - 1]);
    //Establish a first area (with largest width possible)
    let maxArea = (x2 - x1) * y;
    
    while(x2 > x1) {
        //Update values (make smaller range; smaller width of rectangle)
        //Update x1 or x2.
        if(height[x1] === height[x2]) {
            if((height[x1 + 1]) > (height[x2 - 1])) {
                x2--;
            } else {
                x1++;
            }
        } else if(height[x1] > height[x2]) {
            x2--;
        } else {
            x1++;
        }
        
        //Update y
        y = Math.min(height[x1], height[x2]);
        
        //Find this new max area
        let thisArea = (x2 - x1) * y;
        if(thisArea > maxArea) maxArea = thisArea;
    }
    
    return maxArea;
};