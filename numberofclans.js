/*
Let's call two integers A and B friends if each integer from the array divisors is either a divisor of both A and B or neither A nor B. If two integers are friends, they are said to be in the same clan. How many clans are the integers from 1 to k, inclusive, broken into?
*/

function numberOfClans(divisors, k) {
    //Loop through every number 1-k. 
    let factorCombos = {};
    for(let i = 1; i <= k; i++) {
        //For each of them, find out all numbers from divisors that are factors.
        let factors = {};
        for(let j = 0; j < divisors.length; j++) {
            if(i % divisors[j] === 0 && !factors[divisors[j]]) {
                factors[divisors[j]] = true;
            }
        }
        //Combine all factors 
        let factorString = "";
        for(let factor in factors) {
            factorString += factor + " ";
        }
        factorString = factorString.length > 0 ? factorString.trim() : "none";
        //Add this combination of factors to the factorCombos map.
        if(factorCombos[factorString]) {
            factorCombos[factorString]++;
        } else {
            factorCombos[factorString] = 1;
        }
    }
    //Return total numbers of different combinations
    return Object.keys(factorCombos).length;
}
