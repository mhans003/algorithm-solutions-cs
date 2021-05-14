/*
Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.

Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.
*/

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let days = 0;
    let currentHeight = 0;
    //Loop each day, continuing until the height from the day reaches the desired height. If not yet reached, continue by decreasing height from the night and move on to the next day.
    while(true) {
        days++;
        currentHeight += upSpeed;
        if(currentHeight >= desiredHeight) return days;
        currentHeight -= downSpeed;
    }
}