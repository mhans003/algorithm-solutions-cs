/*
When a candle finishes burning it leaves a leftover. makeNew leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover.

You have candlesNumber candles in your possession. What's the total number of candles you can burn, assuming that you create new candles as soon as you have enough leftovers?
*/

function candles(candlesNumber, makeNew) {
    //Start with current number of candles.
    let currentCandles = candlesNumber;
    let currentLeftovers = 0;
    let totalBurned = 0;
    
    //Loop as long as there are whole candles to burn.
    while(currentCandles > 0) {
        //First, burn these candles.
        totalBurned += currentCandles;
        
        //Next, make these current candles into leftovers.
        currentLeftovers += currentCandles;
        currentCandles -= currentCandles;
        
        //Finally, group the new candles using as many of the leftovers as possible.
        currentCandles += Math.floor(currentLeftovers / makeNew);
        currentLeftovers -= currentCandles * makeNew;
    }
    
    return totalBurned;
}
