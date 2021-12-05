/*
When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, and locks it away in his locker. He also leaves a note with a strange, coded message. Your nephew gave you one of the notes in hope that you can decipher it for him. And you did: it looks like all the digits in it are replaced with letters and vice versa. Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.

The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.
*/

function stolenLunch(note) {
    return note.split("")
    .map(character => {
        //Convert numbers to letters (check for spaces to avoid space becoming 'a')
        if(Number(character) >= 0 && Number(character) <= 9 && character !== " ") {
            return String.fromCharCode(97 + Number(character));
            //Convert letters to numbers, using char code differences
        } else if(character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 106) {
            return character.charCodeAt(0) - 97;
        } else {
            //Otherwise, return the character as normal
            return character;
        }
    })
    .join("");
}