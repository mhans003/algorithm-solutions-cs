/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
*/

var canPlaceFlowers = function(flowerbed, n) {
    
    //Loop through all flowers in the flowerbed.
    for(let i = 0; i < flowerbed.length; i++) {
        //If all flowers have been successfully placed, return early.
        if(!n) return true;
        
        //If there is no flower here, place a flower there if its neighbors are empty.
        if(!flowerbed[i]) {
            if(!flowerbed[i - 1] && !flowerbed[i + 1]) {
                flowerbed[i] = 1;
                //Decrement the number of flowers to be placed.
                n--;
            }
        }   
    }
    
    //If flowers are still left, they could not all be successfully placed.
    if(n > 0) return false;
    return true; 
};