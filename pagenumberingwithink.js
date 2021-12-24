/*
You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).

It's guaranteed that you can number the current page, and that you can't number the last one in the book.
*/

function pagesNumberingWithInk(current, numberOfDigits) {
    //Keep track of digits left and the current page.
    let digitsLeft = numberOfDigits;
    let currentPage = current;
    //As long as we have enough digits left, remove the necessary number of digits and go to the next page.
    while(digitsLeft >= String(currentPage).length) {
        digitsLeft -= String(currentPage).length;
        currentPage++;
    }
    //Since there will be an extra page accounted for, decrement by 1 before returning each time.
    return --currentPage;
}