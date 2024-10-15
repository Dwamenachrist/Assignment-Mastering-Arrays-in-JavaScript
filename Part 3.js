// Advanced Array Methods

let fruits = [ 'apple', 'banana', 'mango', 'orange', 'grape']

let longFruits = fruits.filter(fruit => {
    if (fruit.length > 5){
        return fruit;
    }
})
console.log(longFruits);

let sortFruits = fruits.sort()
console.log(sortFruits)


let reverseFruits = fruits.reverse()
console.log(reverseFruits)

let reduceFruitsArray = fruits.reduce( ( acc,fruit) => {
    return acc + "," + fruit
})
console.log(reduceFruitsArray)

