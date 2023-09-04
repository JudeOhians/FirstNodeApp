const numbers = [2, 4, 6, 8, 10, 12, 14]

squared = x => x**x // pure function to get 

// Get the square of all numbers in the array
const squaredNumbers = numbers.map(squared)
console.log(`The squared numbers is presented in the table below: `)
console.table(squaredNumbers)

// Use reduce HOF to get the sum of all squared values
const sumOfSquares = squaredNumbers.reduce((previous, current) => previous + current, 0)
console.log(`The sum of squares is: ${sumOfSquares}`)
// Use built-in Math library function to get square root of value
const rootedSumOfSquares = Math.sqrt(sumOfSquares)
console.log(`The square rooted sum of squares is: ${rootedSumOfSquares}`)