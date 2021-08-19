/*
In an effort to be more innovative, your boss introduced a strange new tradition: the first day of every month you're allowed to work from home. You like this rule when the day falls on a Monday, because any excuse to skip rush hour traffic is great!

You and your colleagues have started calling these months regular months. Since you're a fan of working from home, you decide to find out how far away the nearest regular month is, given that the currMonth has just started.

For your convenience, here is a list of month lengths (from January to December, respectively):

Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Please, note that in leap years February has 29 days.
*/

function regularMonths(currMonth) {
    //Format the current month into two numbers.
    let currentDate = currMonth.split("-").map(str => Number(str));
    
    //Keep track of months
    let months = [
        { name: "January", days: 31 },
        { name: "February", days: 28 },
        { name: "March", days: 31 },
        { name: "April", days: 30 },
        { name: "May", days: 31 },
        { name: "June", days: 30 },
        { name: "July", days: 31 },
        { name: "August", days: 31 },
        { name: "September", days: 30 },
        { name: "October", days: 31 },
        { name: "November", days: 30 },
        { name: "December", days: 31 }
    ];

    //Find the day of the week of the current month.
    const findCurrentDay = inputDate => {
        //Find the number of days in years passed since 1968.
        let days = ((inputDate[1] - 1968) * 365);
        //Add in the total number of leap days that passed in years before.
        days += Math.ceil((inputDate[1] - 1968) / 4);
        //Add in one more day if this year is a leap year, AND if leap day already passed, excluding 2100 (which isn't a leap year)
        let isLeap = false;
        if(inputDate[1] % 4 === 0 && inputDate[0] > 2 && inputDate[1] !== 2100) {
            days++;
            isLeap = true;
        };
        
        //Add in the number of days that have passed so far before this month this year (leap day already included if this is a leap year).
        for(let i = 0; i < inputDate[0] - 1; i++) {
            days += months[i].days;
        }
        
        //Return the number of the current day of the week from the input string (if 0 - Monday, 6 - Sunday, etc.)
        return days % 7;
    };
    
    //Get the 'offset' for the current day of the week of the input day. This will be used when counting the number of days until the next Monday.
    let currentDay = findCurrentDay(currentDate);
    
    //Keep track of the 'current month' we are looking at, starting with the next month.
    let currentMonth = currentDate[0];
    
    //Keep track of the 'current year' we are looking at, starting with the current year, unless we move on to next year.
    let currentYear = currentDate[1];
    
    //Keep moving one month into the future, counting the number of days passed, starting at 0 if Monday, 1 if Tuesday, and so un until 6 if Sunday.
    let daysPassed = currentDay;
    do {
        //Add to the days passed
        daysPassed += months[currentMonth - 1].days;
        //Add an extra day if this is a leap year and we just added February
        if(currentYear % 4 === 0 && currentYear !== 2100 && currentMonth === 2) daysPassed++;
        
        //Update the current month and current year.
        currentMonth = currentMonth === 12 ? 
        1 :
        currentMonth + 1;
        
        currentYear = currentMonth === 1 ? 
        currentYear + 1 :
        currentYear;
        //Continue this loop until we reach a total number of days passed that divides by 7, which means Monday has been reached.
    } while(daysPassed % 7);
    
    //Return the resulting date when the day will be Monday, but format the month appropriately.
    return `${currentMonth < 10 ? `0${currentMonth}` : currentMonth}-${currentYear}`
}
