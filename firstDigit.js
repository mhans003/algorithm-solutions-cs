//Find the leftmost digit that occurs in a given string.

function firstDigit(inputString) {
    let index = 0;
    while(index < inputString.length) {
        switch(inputString[index]) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                return inputString[index];
            default:
                index++;
        }
    }
}
