import './style.css'
const numberOfCupsOfCoffee = 3
const fullName = 'Nicholas Amheiser'
console.log(
  `My name is ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee`
)

const aboutMe = {
  fullName: fullName,
  luckyNumber: 3,
  favoriteMovie: ['Fifth Element', 'John Wick', 'Kung Fu Hustle'],
}

console.table(aboutMe)

const userName = window.prompt('What is your user name?')
console.log(userName)
// ----------------------------------- Math -----------------------------------
const firstOperand = window.prompt('Please write one number.')
const secondOperand = window.prompt('Please write a second number.')
const firstNum = Number(firstOperand)
const secondNum = Number(secondOperand)

const sum = firstNum + secondNum
console.log(sum)

const difference = firstNum - secondNum
console.log(difference)

const product = firstNum * secondNum
console.log(product)

const quotient = firstNum / secondNum
console.log(quotient)

const remainder = firstNum % secondNum
console.log(remainder)

// ---------------------------------------------arrays --------------------------------
type stats = {
  smallest: 'smallest'
  largest: 'largest'
  sum: 'arraySum'
  average: 'average'
}
const numbers = [
  17235, 49260, 44379, 49202, 20771, 16378, 49436, 45930, 2748, 45130,
]
console.log(numbers)
let smallest = Math.min(...numbers)
let largest = Math.max(...numbers)
console.log(smallest + largest)
let arraySum = numbers.reduce((a, b) => a + b, 0)
console.log(arraySum)
let average = arraySum / numbers.length || 0
console.log(average)
