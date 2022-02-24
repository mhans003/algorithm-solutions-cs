//Enter a number of people. This will generate random 'birthdays' (365 distinct values) and determine if any of the 'people' share a birthday.

function sharedBirthday(num) {
    let birthdays = {};

    for(let i = 0; i < num; i++) {
        let birthday = Math.floor(Math.random() * 365);
        if(birthdays[birthday]) return true;
        birthdays[birthday] = true;
    }

    return false;
}