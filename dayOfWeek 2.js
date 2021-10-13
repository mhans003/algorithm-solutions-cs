/*
Whenever you decide to celebrate your birthday you always do this your favorite café, which is quite popular and as such usually very crowded. This year you got lucky: when you and your friend enter the café you're surprised to see that it's almost empty. The waiter lets slip that there are always very few people on this day of the week.

You enjoyed having the café all to yourself, and are now curious about the next time you'll be this lucky. Given the current birthdayDate, determine the number of years until it will fall on the same day of the week.

For your convenience, here is the list of months lengths (from January to December, respectively):

Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Please, note that in leap years February has 29 days. If your birthday is on the 29th of February, you celebrate it once in four years. Otherwise you birthday is celebrated each year
*/

function dayOfWeek(birthdayDate) {
    //Helper function to find the total number of days in a current date.
    const findDays = date => {
        //Days array to define which day it currently is
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        //Keep track of number of days in each month
        let monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        //Parse out the date.
        let currentDate = date.split("-").map(str => Number(str));
        
        //If this is not a leap year, yet the day is 29, return. 
        if((currentDate[0] === 2 && currentDate[1] === 29 && (currentDate[2] - 1900) % 4)) {
            return "Not Leap";
        }
        //If this date is 2/29 on a non-leap year divisible by 100, return (ignore 1900 due to guaranteed constraints)
        if(currentDate[0] === 2 && currentDate[1] === 29 && currentDate[2] % 400 && !(currentDate[2] % 100) && currentDate[2] > 1900) {
            return "Not Leap"
        }
        
        //Convert the date into the total days since Jan 1, 1900.
        //Add up the total number of days in the months that have passed.
        let totalDays = monthLengths.slice(0, currentDate[0] - 1).reduce((a, b) => a += b, 0) +
        //Add the number of days passed in the current month.
        currentDate[1] + 
        //Add the number of days passed in every previous standard year.
        ((currentDate[2] - 1900) * 365) +
        //Add the number of leap year extra days.
        Math.floor((currentDate[2] - 1900) / 4)  -
        //If the current year is a leap year, and the date is not yet Feb 29, remove one leap day
        (((currentDate[2] - 1900) % 4 === 0) && (currentDate[0] < 3) && ((currentDate[2] - 1900) / 4 >= 1) ? 
        1 :
        0) -
        //If we are currently counting after 2100, delete one more leap year
        (currentDate[2] >= 2100 && currentDate[1] > 2 ? 1 : 0);
        return days[totalDays % 7];
    };
    
    //Keep track of the day we want to find as well as the next year's date to check.
    let dayToFind = findDays(birthdayDate);
    let nextDate = birthdayDate;
    //Count the years that have passed.
    let totalYears = 0;
    
    //Keep counting until the number of years is reached.
    while(dayToFind !== findDays(nextDate) || !totalYears) {
        totalYears++;
        let nextDateArray = nextDate.split("-");
        nextDateArray[2]++;
        nextDate = nextDateArray.join("-");
    }
    
    return totalYears; 
}
