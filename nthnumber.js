/*
You are given a string s of characters that contains at least n numbers (here, a number is defined as a consecutive series of digits, where any character immediately to the left and right of the series are not digits). The numbers may contain leading zeros, but it is guaranteed that each number has at least one non-zero digit in it.

Your task is to find the nth number and return it as a string without leading zeros.
*/

function nthNumber(s, n) {
    /*
    Using the RegExp constructor, create a regular expression that matches numbers in the input string (using the global flag).

    For the inner group:
    [1-9]+ Matches one or more non-zero digits. This means only numbers beginning in non-zero numbers will be captured.
    [0-9]* Matches any digit following the first (there can be zero or more).
    Those two categories are grouped together () into a number.

    For the outer group:
    . matches any character except line break.s
    * matches zero or more.
    ? matches as few characters as possible. 

    {n} will make the first result of the exec() call the target nth element we are looking for.

    Finally, when re.exec(s)[1] is called, element 1 of the returned array will contain the number string in the format that is wanted.
    */
    var re = new RegExp(`(([1-9]+[0-9]*).*?){${n}}`, 'g');
    return re.exec(s)[1];
}
  