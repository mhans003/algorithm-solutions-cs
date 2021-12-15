var insertionSortList = function(head) {
    //Iterate through the unsorted portion.
    for(let i = 1; i < head.length; i++) {
        let currentElement = head[i];
        //Iterate back through the sorted portion of this list.
        let j = i - 1;
        while((j >= 0) && (currentElement < head[j])) {
            //Start shifting all elements upward in the sorted portion.
            head[j + 1] = head[j];
            //Move to the next element down.
            j--;
        }
        //Place the current element in its correct spot
        head[j + 1] = currentElement;
    }
    return head;
};