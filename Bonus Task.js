// A function that splits an array into smaller sub arrays of the specified sized

let array = [1, 2, 3, 4, 5, 6]; // A number array

   // An empty array to store sub arrays
function Split(array,size) {    // function to split the array into sub arrays
    let chunkArray = [];
    if (size > 0){      // Check if the specified chunk size is greater than 0
        for( let i = 0; i < array.length; i += size){  // Loop through the array, incrementing by the chunk size in each step

            chunkArray.push(array.slice(i, i + size));      // Adds a specified sub array to the  chunkArray
                }

    }
    console.log(chunkArray)
}

Split(array,2);