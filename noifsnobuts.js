//Write a function that accepts two parameters and says whether a is smaller than, bigger than, or equal to b.
//No 'if' or ? can be used

let noIfsNoButs = (a, b) => {
    let larger = Math.max(a,b);
    let smaller = Math.min(a,b);
    switch(larger) {
        case smaller:
            return `${a} is equal to ${b}`;
        case a:
            return `${a} is greater than ${b}`;
        case b:
            return `${a} is smaller than ${b}`;
    }
}
