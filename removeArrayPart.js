//Remove a part of a given array between given 0-based indexes l and r (inclusive).

function removeArrayPart(inputArray, l, r) {
    return inputArray.slice(0, l).concat(inputArray.slice(r + 1));
}
