//Implement a function that replaces each digit in the given string with a '#' character.

function replaceAllDigitsRegExp(input) {
    //Perform a global replace on all digits between 0-9.
    return input.replaceAll(/[0-9]/g, "#");
}
  