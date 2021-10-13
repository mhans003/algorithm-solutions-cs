/*
An eye rhyme is a rhyme in which two words are spelled similarly but pronounced differently. An example is the pair cough and bough; although they look similar, when they are spoken there is no rhyming quality.

You are writing a thesis on the eye rhyme, and you thought it would be cool to make the text itself eye rhymed. This brilliant idea came to your mind a little too late: the text is already written. Now you want to check if a given pair of lines in your text have an eye rhyme. More specifically, you want to make sure that the last three characters of each pair of lines coincide.

You have already split your text into pairs of lines. Now all that's left is to check that the last three characters of the lines in each pairOfLines coincide. Implement a function that will do this job.
*/

function eyeRhyme(pairOfLines) {
    /*
    Using RegExp constructor, create a pattern to capture two separate groups:
    The first is the set of any 3 characters before the tab:
    -.* matches any character(s).
    -Starting in the capture group, match any 3 characters.
    -\t references the tab that comes immediately after the 3 captured characters.
    The second group is the 3 characters at the end:
    -.* matches any character(s).
    -Starting in the capture group, match any 3 characters.
    -$ references the end of the string.
    When exec() is run on the input string, the 3 characters before the \ are grouped and the 3 end characters are grouped.
    When the two strings are compared, it returns true if they are the same and false otherwise.
    */
    var re = new RegExp(".*(.{3})\t.*(.{3})$");
    var match = re.exec(pairOfLines);
    return match[1] == match[2];
}
