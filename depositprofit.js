/*
You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.
*/

function depositProfit(deposit, rate, threshold) {
    //Keep track of current total amount and years passed.
    let total = deposit;
    let years = 0;
    while(total < threshold) {
        //Keep adding one year and adding this rate to the total until past threshold.
        years++;
        total += (total * rate / 100);
    }
    return years;
}