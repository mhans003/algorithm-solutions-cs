/*
In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.
*/

var hasGroupsSizeX = function(deck) {
    //If the deck has no more than 1 card, return false.
    if(deck.length < 2) return false; 
    
    //Create an object map of the cards
    let deckMap = {};
    
    //Go through each card in the deck, and organize with other cards of its number.
    while(deck.length) {
        let thisCard = deck.pop();
        if(deckMap[thisCard]) {
            deckMap[thisCard]++;
        } else {
            deckMap[thisCard] = 1;
        }
    }
    
    //Isolate every 'number' of each card number.
    let cardNumbers = Object.values(deckMap).sort((a, b) => a - b);

    //Get the smallest number of possible groupings to check against all number of each card number.
    let factors = getFactors(cardNumbers[0]);
    
    //Find a factor in the factor list that can divide evenly into EVERY number of each card number
    for(let i = 0; i < factors.length; i++) {
        if(cardNumbers.every(cardNumber => cardNumber % factors[i] === 0)) return true;
    }
    
    return false;
    
    //Helper function to find all factors (ignoring 1) 
    function getFactors(n) {
        let max = n;
        let factors = [];
        for(let i = 2; i <= max; i++) {
            if(n % i === 0) {
                factors.push(i);
                //Ignore 1
                if(n / i !== 1) {
                    factors.push(n / i);
                }
                //Update max
                max = n / i;
            }
        }
        //Return sorted factors
        return factors.sort((a, b) => b - a);
    }
};