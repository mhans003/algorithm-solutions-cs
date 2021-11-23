/*
Benjamin recently bought a digital clock at a magic trick shop. The seller never told Ben what was so special about it, but mentioned that one day Benjamin would be faced with a surprise.

Indeed, the clock did surprise Benjamin: without warning, at someTime the clock suddenly started going in the opposite direction! Unfortunately, Benjamin has an important meeting very soon, and knows that at leavingTime he should leave the house so as to not be late. Ben spent all his money on the clock, so has to figure out what time his clock will show when it's time to leave.

Given the someTime at which the clock started to go backwards, find out what time will be shown on the curious clock at leavingTime.
*/

function curiousClock(someTime, leavingTime) {
    //Array to keep track of month lengths
    let monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let monthMinutes = [44640, 40320, 44640, 43200, 44640, 43200, 44640, 44640, 43200, 44640, 43200, 44640];
    //Convert an input string into minutes.
    const convertToMins = timeString => {
        //Split this date into units.
        let timeUnits = timeString.split(" ").map((string, index) => {
            let items = [];
            if(index === 0) {
                items = string.split("-");
            } else if(index === 1) {
                items = string.split(":");
            }
            return items;
        //Remove array nesting and map to numbers.
        }).flat().map(str => Number(str));        
        
        //Convert each unit to minutes.
        let totalMinutes = 
        //Convert the year to minutes (since Jan 1, 1901 up until Jan 1 of this year)
        (525600 * (timeUnits[0] - 1901)) + 
        //Account for extra minutes in leap years between 
        (1440 * (Math.floor((timeUnits[0] - 1901) / 4))) +
        //Find the number of minutes in all months leading up to the current month
        (monthMinutes.slice(0, timeUnits[1] - 1).reduce((a, b) => a += b, 0)) + 
        //Find the number of minutes in all days leading up to the current day
        (1440 * (timeUnits[2] - 1)) + 
        //Find the number of minutes in all hours leading up to the current hour
        (60 * timeUnits[3]) + 
        //Add remaining minutes
        (timeUnits[4]) +
        //If this is a leap year and leap day already passed, add in the extra leap day minutes
        (timeUnits[0] % 4 === 0 && timeUnits[1] > 2 ? 1440 : 0);
                
        return totalMinutes;
    };
    
    const convertToString = minutesInput => { 
        //Track the minutes left to convert to other units.
        let minutesLeft = minutesInput;
        //Extract the minutes
        let mins = minutesLeft % 60;
        minutesLeft -= mins;
        //Extract the hours
        let hours = (minutesLeft % 1440);
        minutesLeft -= hours;
        hours /= 60;
        //Extract the years and remove leap days.
        let years = Math.floor(minutesLeft / 525600);
        let numLeapDays = Math.floor(years / 4);
        minutesLeft -= (525600 * years);
        years += 1901;
        minutesLeft -= (numLeapDays * 1440);
        //Extract the months.
        let monthSum = 0;
        let monthIndex = 0;
        //Incrementally add each month's minutes to a total until the current minutes left is reached.
        while(monthSum + monthMinutes[monthIndex] <= minutesLeft) {
            monthSum += monthMinutes[monthIndex];
            monthIndex++;
        }
        let months = monthIndex + 1;
        minutesLeft -= monthSum;
        //Extract the date
        let day = minutesLeft / 1440;
        //Determine if a day needs to be accounted for (leap day)
        if(years % 4 || (!(years % 4) && months < 3)) day++;
        
        //Format output.
        return `${years}-${months < 10 ? 
        `0${months}` : 
        `${months}`}-${day < 10 ?
        `0${day}` :
        `${day}`} ${hours < 10 ? 
        `0${hours}` :
        `${hours}`}:${mins < 10 ?
        `0${mins}` :
        `${mins}`}`;
    };
    
    //Find the difference between someTime and leavingTime
    let someTimeMins = convertToMins(someTime);
    let leavingTimeMins = convertToMins(leavingTime);
    let timeDifference = leavingTimeMins - someTimeMins;
    
    //Convert these minutes back to a string.
    let benTimeMins = someTimeMins - timeDifference;
    return convertToString(benTimeMins);
}
