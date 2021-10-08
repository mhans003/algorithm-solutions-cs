//Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

function isSumOfConsecutive2(n) {
    let totalWays = 0;
    for(let i = 2; i < Math.floor(n / 2); i++) {
        //Get the total sum of all digits between 1 and i (current number).
        let sum = (i * (i + 1)) / 2;
        //If this sum is larger than n, we are done.
        if(sum > n) break;
        //If this current sum subtracted from the starting number is divisible by current value, this is one consecutive sum.
        if((n - sum) % i === 0) totalWays++;
    }
    return totalWays;
}
