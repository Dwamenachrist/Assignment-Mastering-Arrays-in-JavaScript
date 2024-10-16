// Array Iteration

let fruits = [ 'apple', 'banana', 'mango', 'orange', 'grape']

for (let i = 0; i < fruits.length; i++ ){   // This line uses the for loop to iterate each fruit in the array
    console.log(fruits[i]) // This line print out the fruit in the array
}

fruits.forEach(fruit => {             // the forEach method also iterates each fruit in the array
    let fruitIndex = fruits.indexOf(fruit)      // the index of each fruit in the array was assigned to the variable fruitIndex
    console.log(fruitIndex, ":", fruit)    // This print out the index of the fruit with it corresponding fruit in the array
})

let fruitLengths = fruits.map( fruit => {  // each mapping is assigned to the fruitLength variable
    return( fruit.length)       // The length of each fruit is returned to the function
})
console.log(fruitLengths)   // This print out an array of each fruit lengths
