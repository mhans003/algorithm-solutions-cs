/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

var maxProfit = function(prices) {
    //Start with a value of Inifinity
    let minPrice = Math.min();
    //Start with the smallest assumed profit ($0)
    let maxProfit = 0;
    
    //Loop through every price.
    for(let thisPrice of prices) {
        //If the next price in the array is smaller than the current smallest saved, replace it.
        minPrice = Math.min(thisPrice, minPrice);
        //Compare the difference between this price and the last smallest one to the current max profit (previous max difference). If this is larger, replace the max profit. 
        maxProfit = Math.max(thisPrice - minPrice, maxProfit);
    }
    return maxProfit;
};
