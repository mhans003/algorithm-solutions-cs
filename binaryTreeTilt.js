//** REQUIRES BINARY TREE OBJECT **/
let findTilt = function(root) {
    //Keep track of the 'tilt' which is going to be returned for the root node.
    let nodeTilt = 0;

    //Start recursion, from the top of the node tree (entire node array).
    traverseNode(root);

    //Now, return the total sum from the top of the node tree.
    return nodeTilt;

    //Recursive helper function to traverse down a current node.
    function traverseNode(node) {
        //If this node is null (reached the bottom of this node) return 0 and unwind.
        if(node === null) return 0;

        //Recursively go down this node's left side.
        let left = traverseNode(node.left);

        //Recursively go down this node's right side.
        let right = traverseNode(node.right);

        //Get the sum of these two sides.
        let sum = left + right;

        //Add to the total node tilt.
        tilt += Math.abs(left - right);

        //Add this node's val (requires existing node object) the sum of this node's right and left sides.
        return sum + node.val;
    }
};