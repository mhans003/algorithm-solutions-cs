/*
There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.
*/

function houseOfCats(legs) {
    //Start assuming all legs belong to people.
    //Incrementally group 4 legs into cats, each time grouping the legs left into 2 (people)
    let legsLeft = legs;
    let possiblePeople = [];
    while(legsLeft >= 0) {
        //Put this possible number into the beginning of the array so it is sorted.
        possiblePeople.unshift(legsLeft / 2);
        legsLeft -= 4;
    }
    return possiblePeople;
}
