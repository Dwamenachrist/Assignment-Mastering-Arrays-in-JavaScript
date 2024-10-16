// Advanced Array Methods

let fruits = [ 'apple', 'banana', 'mango', 'orange', 'grape']

let longFruits = fruits.filter(fruit => {       // The filter helps to create a new array that contains only the filtered fruits
    if (fruit.length > 5){  // This is the filter condition to return only fruits with more than 5 characters
        return fruit;
    }
})
console.log(longFruits);    // Print out the filtered fruits

let sortFruits = fruits.sort()   // It sorts the fruits array alphabetically
console.log(sortFruits)  // Print out the sorted array


let reverseFruits = fruits.reverse()        // It reverses the order of the fruits in the array
console.log(reverseFruits)  // Print out the reverse fruits in the array

let reduceFruitsArray = fruits.reduce( ( acc,fruit) => {    // The reduce method put all the strings in the array together index by index
    return acc + "," + fruit    // The fruits are returned and seperated by commas
})
console.log(reduceFruitsArray)      // Print out the accumulated fruit seperated by commas

