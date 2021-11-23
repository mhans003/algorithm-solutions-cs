/*
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.
*/

function digitsProduct(product) {
    //Return early in special cases: product is 0 or a one-digit number.
    if(product === 0) return 10
    if(product < 10) return product;
    
    //Find all factors
    let factors = [];
    for(let i = 1; i <= 9; i++) {
        if(product % i === 0) factors.push(i);
    }
    console.log(factors);
    
    //Return early if number is prime and longer than one digit.
    if(factors.length < 2) return -1;
    
    //Using only the number's one-digit factors, work backwards to divide the product recursively by the largest possible factor until reaching one.
    
    //Keep track of the digits and the current product.
    let digits = [];
    let currentProduct = product;
    
    //While the product has not been divided down to 1:
    while(currentProduct > 1) {
        //Each time we divide, start with the largest possible one-digit factor.
        for(let i = factors.length - 1; i > 0; i--) {
            //If this factor can be used to divide the current product evenly, it becomes one of our result digits, and we continue to divide the product down. Break out of this iteration if so.
            if(currentProduct % factors[i] === 0) {
                digits.unshift(factors[i]);
                currentProduct = currentProduct / factors[i];
                break;
            } else if(i === 1) {
                //If we have not found a factor to divide evenly with, then there is no way to build this number.
                return -1;
            }
        }
    }

    //Join the digits together and return.
    return Number(digits.join(""));
}