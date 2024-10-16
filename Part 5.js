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
