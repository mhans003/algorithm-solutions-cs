/*
You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.

The coin values available in Bananaland are stored in a sorted array coins. coins[0] = 1, and for each i (0 < i < coins.length) coins[i] is divisible by coins[i - 1]. Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's price.
*/

function minimalNumberOfCoins(coins, price) {
    let costLeft = price;
    //Loop through every coin in the array.
    let total = 0;
    for(let coin = coins.length - 1; coin >= 0; coin--) {
        //Find the number of this coin value that can be used, and then update the leftover price to be the remainder.
        total += Math.floor(costLeft / coins[coin]);
        costLeft %= coins[coin];
        //If this total is equal to the price, return the total.
        if(total === price) return total;
    }
    return total;
}
