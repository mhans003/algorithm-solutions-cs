//Given a string s, determine if it is a subsequence of a given string t.

function isSubsequence(t, s) {
    var pattern = "";
    //For each letter in the string s (used to build the pattern to apply to string t), incrementally construct with the current element.
    //Since we are looking for that particular character, use [].
    //.* together looks for that character, then at some later point, the following character.
    for (var i = 0; i < s.length; i++) {
      pattern += `[${s[i]}].*`;
    }
    var re = new RegExp(pattern);
    return re.test(t);
}
  