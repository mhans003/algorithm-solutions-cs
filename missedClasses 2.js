/*
Your Math teacher takes education very seriously, and hates it when a class is missed or canceled for any reason. He even made up the following rule: if a class is missed because of a holiday, the teacher will compensate for it with a makeup class after school.

You're given an array, daysOfTheWeek, with the weekdays on which your teacher's classes are scheduled, and holidays, representing the dates of the holidays throughout the academic year (from 1st of September in year to 31st of May in year + 1). How many times will you be forced to stay after school for a makeup class because of holiday conflicts in the current academic year?

For your convenience, here is the list of month lengths (from January to December, respectively):

Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Please note that in leap years February has 29 days.
*/

function missedClasses(year, daysOfTheWeek, holidays) {
    //Keep track of months.
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
    //Find the day of the week that it will be at the beginning of a given month.
        const findCurrentDay = inputDate => {
            //Find the number of days in years passed since 1872.
            let days = ((inputDate[1] - 1872) * 365);
            //Add in the total number of leap days that passed in years before.
            days += Math.ceil((inputDate[1] - 1872) / 4);
            //Remove extra leap day from 1900 or 2100.
            if(inputDate[1] > 1900) days--;
            if(inputDate[1] > 2100) days--;
            //Add in one more day if this year is a leap year, AND if leap day already passed, excluding 2100 (which isn't a leap year)
            let isLeap = false;
            if(inputDate[1] % 4 === 0 && inputDate[0] > 2 && inputDate[1] !== 2100 && inputDate[1] !== 1900) {
                days++;
                isLeap = true;
            };
            
            //Add in the number of days that have passed so far before this month this year (leap day already included if this is a leap year).
            for(let i = 0; i < inputDate[0] - 1; i++) {
                days += months[i].days;
            }
            
            //Finally, add in the number of days passed this month.
            days += (inputDate[2] - 1);
            
            //Return the number of the current day of the week from the input string (if 0 - Monday, 6 - Sunday, etc.)
            return days % 7;
        };
    
    //Keep track of the number of days that will be missed.
    let missedClasses = 0;
    
    //For each holiday, see if the day of the week matches one of the days in the days of the week array. If so, add to the count of missed classes.
    holidays.forEach(holiday => {
        //Format this holiday.
        let thisDate = holiday.split("-").map(str => Number(str));
        //Check if this date lands on one of the class days.
        daysOfTheWeek.forEach(day => {
            //Pass this date into the function, making sure we pass in the next year if the dates are for the winter/spring sessions.
            if(findCurrentDay([thisDate[0], thisDate[0] > 8 ? year : year + 1, thisDate[1]]) === day - 1) missedClasses++;
        });
    });
    
    return missedClasses;
}
