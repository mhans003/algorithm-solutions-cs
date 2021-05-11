/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!
*/
function sortByHeight(a) {
    //See where the trees are.
    let trees = {};
    for(let i = 0; i < a.length; i++) {
        if(a[i] === -1) {
            trees[i] = true;
        } else {
            trees[i] = false;
        }
    }
    
    //See where the people are.
    let people = [];
    for(let i = 0; i < a.length; i++) {
        if(trees[i] === false) {
            people.push(a[i]);
        }
    }
    
    //Sort the people.
    people.sort(function(a, b) {return a-b});
    
    let sorted = [];
    for(let i = 0; i < a.length; i++) {
        if(trees[i] === true) {
            sorted.push(-1);
        } else {
            let nextPerson = people.shift();
            sorted.push(nextPerson);
        }
    }
    
    return sorted;
}