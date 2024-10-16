// Part 4: Multi-dimensional Arrays

// Three separate arrays to represent the rows of the 2D array
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [7,8,9];

let array2D = [array1, array2, array3]; // Combines the three arrays into a single 2D array
console.log(array2D);   // // Print the entire 2D array

console.log(array2D[1][2]);     //  Print the value in row 2 (index 1) and column 3 (index 2)

console.log(array2D.flat()) //  Flattening the 2D array into a single 1D array
