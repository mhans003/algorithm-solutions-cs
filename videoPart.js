/*
You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

Example

For part = "02:20:00" and total = "07:00:00", the output should be
videoPart(part, total) = [1, 3].

You have watched 1 / 3 of the whole video.
*/

function videoPart(part, total) {
    //Get the total number of seconds for the 'part' and the 'total' length of the video.
    let partSeconds = part.split(":")
    .map(str => Number(str))
    .reduce((total, number, index) => {
        return index === 0 ?
        total += (number * 3600) :
        index === 1 ?
        total += (number * 60) :
        total += number;
    }, 0);
    
    let totalSeconds = total.split(":")
    .map(str => Number(str))
    .reduce((total, number, index) => {
        return index === 0 ?
        total += (number * 3600) :
        index === 1 ?
        total += (number * 60) :
        total += number;
    }, 0);
    
    //If there is a remainder when dividing these values, we know we need to reduce the fraction.
    if(totalSeconds % partSeconds) {
        //Find the GCF between the numerator and denominator, then return the simplified fraction.
        let commonFactor = findCommonFactors(findFactors(partSeconds), findFactors(totalSeconds))
        return [partSeconds / commonFactor, totalSeconds / commonFactor];
    }
    
    //Otherwise, return this as a unit fraction.
    return [1, totalSeconds / partSeconds];

    //Helper function to find all factors of each number.
    function findFactors(num) {
        let max = num === 1 ? 1 : Math.ceil(num / 2);
        let factors = [];
        for(let i = 1; i <= max; i++) {
            if(num % i === 0) {
                factors.push(num / i);
                factors.push(i);
                max = num / i;
            }
        }
        return factors;
    }
    
    //Helper function to find the GCF between the two.
    function findCommonFactors(factors1, factors2) {
        factors1.sort((a, b) => b - a);
        for(let i = 0; i < factors1.length; i++) {
            if(factors2.includes(factors1[i])) {
                return factors1[i];
            }
        }
        return 1;
    }
}
