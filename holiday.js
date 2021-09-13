/*
John Doe likes holidays very much, and he was very happy to hear that his country's government decided to introduce yet another one. He heard that the new holiday will be celebrated each year on the xth week of month, on weekDay.

Your task is to return the day of month on which the holiday will be celebrated in the year yearNumber.

For your convenience, here are the lists of months names and lengths and the list of days of the week names.

Months: "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December".
Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Days of the week: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday".
Please, note that in leap years February has 29 days.
*/

function holiday(x, weekDay, month, yearNumber) {
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
        //Keep track of if this year is a leap year.
        let isLeap = false;
        
        //Keep track of days.
        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        
        //Find the day of the week that it will be at the beginning of a given month.
        const findCurrentDay = inputDate => {
            //Find the number of days in years passed since 1996.
            let days = ((inputDate[1] - 1996) * 365);
            //Add in the total number of leap days that passed in years before.
            days += Math.ceil((inputDate[1] - 1996) / 4);
            //Remove extra leap day from specific years.
            if(inputDate[1] > 2100) days--;
            if(inputDate[1] > 2200) days--;
            if(inputDate[1] > 2300) days--;
            //Add in one more day if this year is a leap year, AND if leap day already passed, excluding certain years (which aren't a leap year)
            
            if(inputDate[1] % 4 === 0 && inputDate[1] !== 2100 && inputDate[1] !== 2200 && inputDate[1] !== 2300 && inputDate[1] !== 2500) {
                if(inputDate[0] > 2) days++;
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
        
        //Find the month number of the month name passed into the function.
        let monthNumber = months.indexOf(months.find(thisMonth => thisMonth.name === month)) + 1;
        
        //Find the day of the week (0 - Monday; 6 - Sunday) on the first day of the target month/year.
        let dayOfFirst = findCurrentDay([monthNumber, yearNumber, 1]);
        
        //Find the date when the holiday will occur.
        let dateOfHoliday = 1 + (days.indexOf(weekDay) === dayOfFirst  ? 0 : days.indexOf(weekDay) > dayOfFirst ? days.indexOf(weekDay) - dayOfFirst : (7 - dayOfFirst) + days.indexOf(weekDay)) + (7 * (x - 1));
        
        //Check one final case: If this is an actual leap day, don't return -1. In any case, return the date if not over bounds of the given month.    
        return dateOfHoliday <= months[months.indexOf(months.find(thisMonth => thisMonth.name === month))].days ||
        (isLeap && month === "February" && dateOfHoliday === 29) ? 
        dateOfHoliday :
        -1;
}
    