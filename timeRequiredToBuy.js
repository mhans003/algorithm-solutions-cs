/*
There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.

You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].

Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.

Return the time taken for the person at position k (0-indexed) to finish buying tickets.
*/

var timeRequiredToBuy = function(tickets, k) {
    let steps = 0;
    tickets.forEach((ticketNumber, index) => {
        //If this ticket number index comes before k
        if(index < k) {
            //Add the whole amount if this number is equal to or less than tickets[k]
            if(ticketNumber <= tickets[k]) {
                steps += ticketNumber;
            } else {
                //Otherwise, add the same amount as tickets[k] itself.
                steps += tickets[k];
            }
        //If this ticket number comes after k
        } else if(index > k) {
            //Add the whole amount if this number is less than tickets[k]
            if(ticketNumber < tickets[k]) {
                steps += ticketNumber;
            } else {
                //Otherwise, add the whole amount of tickets[k] minus one
                steps += (tickets[k] - 1);
            }
            
        }
    });
    //Return the computed number of iterations plus the amount of the number tickets[k] itself.
    return steps + tickets[k];
};