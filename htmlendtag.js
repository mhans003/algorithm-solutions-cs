/*
You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.
*/

function htmlEndTagByStartTag(startTag) {
    //Get the tag name.
    let tag = startTag.substr(1, startTag.indexOf(" ")) ? 
    startTag.substr(1, startTag.indexOf(" ") - 1) : 
    startTag.substr(1, startTag.indexOf(">") - 1);
    //Return the closing version of the tag.
    return `</${tag}>`;
}
