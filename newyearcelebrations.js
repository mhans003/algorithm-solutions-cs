/*
You're a pretty busy billionaire, and you often fly your personal Private Jet to remote places. Usually travel doesn't bother you, but this time you are unlucky: it's New Year's Eve, and since you have to fly halfway around the world, you'll probably have to celebrate New Year's Day in mid-air!

Your course lies west of your current location and crosses several time zones. The pilot told you the exact schedule: it is known that you will take off at takeOffTime, and in minutes[i] after takeoff you will cross the ith border between time zones. After crossing each border you will have to set your wrist watch one hour earlier (every second matters to you, so you can't let your watch show incorrect time). It is guaranteed that you won't cross the IDL (i.e. after crossing each time zone border your current time will be set one hour back).

You've been thinking about this situation and realized that it might be a good opportunity to celebrate New Year's Day more than once, i.e. each time your wrist watch shows 00:00. Assuming that you set your watch immediately after the border is crossed, how many times will you be able to celebrate this New Year's Day with a nice bottle of champagne? Note that the answer should include celebrations both in mid-air and on the ground (it doesn't matter if the plane landed in the last time zone before the midnight or not, you'll not let the last opportunity to celebrate New Year slip through your fingers).
*/

function newYearCelebrations(takeOffTime, minutes) {
    let celebrations = 0;
    //Convert takeoff time to minutes
    let takeOffMinutes = takeOffTime.split(":").map(str => Number(str));
    takeOffMinutes = (takeOffMinutes[0] * 60) + takeOffMinutes[1];
    //If the clock is already midnight, set to a full 24-hour set of minutes.
    if(takeOffMinutes === 0) takeOffMinutes = 1440;
    
    //Convert minutes into individual increments
    let minuteIncrements = minutes.map((mins, index) => {
        if(index === 0) return mins;
        return mins - minutes[index - 1];
    });
        
    //Loop through each of the increments. 
    for(let i = 0; i < minuteIncrements.length; i++) {
        //Add this time increment. If midnight passes during this time, celebrate.
        if(takeOffMinutes < 1440 && takeOffMinutes + minuteIncrements[i] >= 1440 ||
        takeOffMinutes <= 1440 && takeOffMinutes + minuteIncrements[i] > 1440) celebrations++;
        takeOffMinutes += minuteIncrements[i];
        
        //Go back one hour at the end of the cycle.
        takeOffMinutes -= 60;
    }
    
    //Finally, if the plane landed and it is before midnight, celebrate one more time.
    if(takeOffMinutes <= 1440) celebrations++;
    return celebrations;
}
