/*
A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

The area of the rectangular web page you designed must equal to the given target area.
The width W should not be larger than the length L, which means L >= W.
The difference between length L and width W should be as small as possible.
Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.
*/

var constructRectangle = function(area) {
    //Hold all sets of factors for this area.
    let factorSets = [];
    
    //Find all factors
    //Do-While structure allows for input of 1 to work. 
    let max = area;
    let i = 1;
    do {
        //See if this is a factor.
        if(area % i === 0) {
            //Make sure longer side is first in set.
            factorSets.push([area / i, i]);
        }
        //Update max and i.
        max = Math.ceil(area / i);
        i++;
    } while(i < max)
    
    //Return the last set in the list (this will have the smallest value of l - w)
    return factorSets.pop();
};