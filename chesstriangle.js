/*
Consider a bishop, a knight and a rook on an n × m chessboard. They are said to form a triangle if each piece attacks exactly one other piece and is attacked by exactly one piece. Calculate the number of ways to choose positions of the pieces to form a triangle.

Note that the bishop attacks pieces sharing the common diagonal with it; the rook attacks in horizontal and vertical directions; and, finally, the knight attacks squares which are two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from its position.
*/

function chessTriangle(n, m) {
    let count = 0;
    //Loop through every square, where a knight could be.
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            //At each square, find every spot where this knight could attack.
            
            //Check right side (1/4)
            
            //Check upper 4x3 rectangle (K is corner)
            if(i - 3 >= 0 && j + 2 < m) count++;
            //Check upper 3x3 rectangle (K is corner)
            if(i - 2 >= 0 && j + 2 < m) count++;
            //Check upper 2x3 rectangle (K is corner)
            if(i - 1 >= 0 && j + 2 < m) count += 2;
            //Check lower 4x3 rectangle (K is corner)
            if(i + 3 < n && j + 2 < m) count++;
            //Check lower 3x3 rectangle (K is corner)
            if(i + 2 < n && j + 2 < m) count++;
            //Check lower 2x3 rectangle (K is corner) 
            if(i + 1 < n && j + 2 < m) count += 2;
            //Plus, check if K is middle of 3x3 rectangle
            if(i + 1 < n && i - 1 >= 0 && j + 2 < m) count += 2;
            //Check if K is lower end of a 4x3 rectangle
            if(i - 2 >= 0 && i + 1 < n && j + 2 < m) count++;
            //Check if K is higher end of a 4x3 rectangle
            if(i - 1 >= 0 && i + 2 < n && j + 2 < m) count++;
            //Check upper 2x4 rectangle (K is corner)
            if(i - 1 >= 0 && j + 3 < m) count+=2;
            //Check lower 2x4 rectangle (K is corner)
            if(i + 1 < n && j + 3 < m) count+=2;
            
            //Check left side (2/4)
            
            //Check upper 4x3 rectangle (K is corner)
            if(i - 3 >= 0 && j - 2 >= 0) count++;
            //Check upper 3x3 rectangle (K is corner)
            if(i - 2 >= 0 && j - 2 >= 0) count++;
            //Check upper 2x3 rectangle (K is corner)
            if(i - 1 >= 0 && j - 2 >= 0) count += 2;
            //Check lower 4x3 rectangle (K is corner)
            if(i + 3 < n && j - 2 >= 0) count++;
            //Check lower 3x3 rectangle (K is corner)
            if(i + 2 < n && j - 2 >= 0) count++;
            //Check lower 2x3 rectangle (K is corner) 
            if(i + 1 < n && j - 2 >= 0) count += 2;
            //Plus, check if K is middle of 3x3 rectangle
            if(i + 1 < n && i - 1 >= 0 && j - 2 >= 0) count += 2;
            //Check if K is lower end of a 4x3 rectangle
            if(i - 2 >= 0 && i + 1 < n && j - 2 >= 0) count++;
            //Check if K is higher end of a 4x3 rectangle
            if(i - 1 >= 0 && i + 2 < n && j - 2 >= 0) count++;
            //Check upper 2x4 rectangle (K is corner)
            if(i - 1 >= 0 && j - 3 >= 0) count+=2;
            //Check lower 2x4 rectangle (K is corner)
            if(i + 1 < n && j - 3 >= 0) count+=2;
            
            //Check top side (3/4)
            
            //Check upper 4x3 rectangle (K is corner)
            if(j - 3 >= 0 && i - 2 >= 0) count++;
            //Check upper 3x3 rectangle (K is corner)
            if(j - 2 >= 0 && i - 2 >= 0) count++;
            //Check upper 2x3 rectangle (K is corner)
            if(j - 1 >= 0 && i - 2 >= 0) count += 2;
            //Check lower 4x3 rectangle (K is corner)
            if(j + 3 < m && i - 2 >= 0) count++;
            //Check lower 3x3 rectangle (K is corner)
            if(j + 2 < m && i - 2 >= 0) count++;
            //Check lower 2x3 rectangle (K is corner) 
            if(j + 1 < m && i - 2 >= 0) count += 2;
            //Plus, check if K is middle of 3x3 rectangle
            if(j + 1 < m && j - 1 >= 0 && i - 2 >= 0) count += 2;
            //Check if K is lower end of a 4x3 rectangle
            if(j - 2 >= 0 && j + 1 < m && i - 2 >= 0) count++;
            //Check if K is higher end of a 4x3 rectangle
            if(j - 1 >= 0 && j + 2 < m && i - 2 >= 0) count++;
            //Check upper 2x4 rectangle (K is corner)
            if(j - 1 >= 0 && i - 3 >= 0) count+=2;
            //Check lower 2x4 rectangle (K is corner)
            if(j + 1 < m && i - 3 >= 0) count+=2;
            
            //Check bottom side (4/4)
            
            //Check upper 4x3 rectangle (K is corner)
            if(j - 3 >= 0 && i + 2 < n) count++;
            //Check upper 3x3 rectangle (K is corner)
            if(j - 2 >= 0 && i + 2 < n) count++;
            //Check upper 2x3 rectangle (K is corner)
            if(j - 1 >= 0 && i + 2 < n) count += 2;
            //Check lower 4x3 rectangle (K is corner)
            if(j + 3 < m && i + 2 < n) count++;
            //Check lower 3x3 rectangle (K is corner)
            if(j + 2 < m && i + 2 < n) count++;
            //Check lower 2x3 rectangle (K is corner) 
            if(j + 1 < m && i + 2 < n) count += 2;
            //Plus, check if K is middle of 3x3 rectangle
            if(j + 1 < m && j - 1 >= 0 && i + 2 < n) count += 2;
            //Check if K is lower end of a 4x3 rectangle
            if(j - 2 >= 0 && j + 1 < m && i + 2 < n) count++;
            //Check if K is higher end of a 4x3 rectangle
            if(j - 1 >= 0 && j + 2 < m && i + 2 < n) count++;
            //Check upper 2x4 rectangle (K is corner)
            if(j - 1 >= 0 && i + 3 < n) count+=2;
            //Check lower 2x4 rectangle (K is corner)
            if(j + 1 < m && i + 3 < n) count+=2;
        }
    }
    
    return count;
}
