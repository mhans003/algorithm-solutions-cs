//Given a valid email address, find its domain part.

function findEmailDomain(address) {
    //Keep track of the current index, and create an array to store the domain.
    let currentIndex = address.length - 1;
    let domain = [];
    //As long as we aren't at the beginning of the string or reached the @, add to the array in correct order using unshift
    while(address[currentIndex] !== "@" && currentIndex >= 0) {
        domain.unshift(address[currentIndex]);
        currentIndex--;
    }
    //Return the result as a string
    return domain.join("");
}
