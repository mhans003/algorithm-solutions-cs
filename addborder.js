/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.
*/

function addBorder(picture) {
    picture.forEach((string, index) => {
        picture[index] = "*" + string + "*";
    });
    let frame = "";
    for(let i = 0; i < picture[0].length; i++) {
        frame += "*";
    }
    picture.unshift(frame);
    picture.push(frame);
    
    return picture;
}