/*
Let's call product(x) the product of x's digits. Given an array of integers a, calculate product(x) for each x in a, and return the number of distinct results you get.
*/

function uniqueDigitProducts(a) {
    let products = [];
    //Loop through each number, finding the product of its digits.
    a.forEach(number => {
        let currentNumber = number;
        let product = 1;
        while(currentNumber) {
            //Get the next digit.
            let thisDigit = currentNumber % 10;
            //Multiply this number.
            product *= thisDigit;
            //Update the current number (go to next digit)
            currentNumber = Math.floor(currentNumber / 10);
        }
        //See if this product already exists in the products array.
        if(products.indexOf(product) === -1) products.push(product);
    });
    //Return the number of unique products.
    return products.length;
}
