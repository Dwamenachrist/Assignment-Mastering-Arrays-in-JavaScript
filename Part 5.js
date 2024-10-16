// Part 5: Challenges

const mixedFruits = ['apple', 'grape', 'apple', 'orange', 'grape'] // Array with duplicate fruits

let uniqueFruits = [] // Empty array to store unique fruits

const RemoveDuplicates =(array) =>{     //  function to remove duplicates fruit in an array

    array.forEach((fruit)=>{        // looping through to get each fruit in the array
        if (!uniqueFruits.includes(fruit)){     // Checking if fruit already exist in the uniqueFruits array before pushing
            uniqueFruits.push(fruit);
        }
    })
    console.log(uniqueFruits)   // Print an array of unique fruits
}

RemoveDuplicates(mixedFruits) // Call the RemoveDuplicates function to remove duplicates from the mixedFruits array

// Finding the Maximum Number in the array
const numbers = [15, 24, 6, 89, 32]  // An array of numbers

numbers.sort((b, a) => a - b)       // sort the array of numbers in descending order

console.log(numbers[0])     //Print out the first number in the sorted array